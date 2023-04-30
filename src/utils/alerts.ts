import ItemsService from '@/services/items.service';

import { getPreviousDay } from './dateUtil';
import { conditionChecker } from './validatorUtil';
import MailSender from './mailSender';
import Jobs from './jobs';
import ApiService from '@/services/api.service';

class Alerts {
  public static async itemsAlerts() {
    const items: any[] = await new ItemsService().findAll();
    const inventoryUser: any = await new ApiService().findAll('InventoryUser');
    const inventoryItems: any = await new ApiService().findAll('InventoryItem');

    inventoryUser.forEach(element => {
      const email = element.dataValues.user.dataValues.email;
      const inventoryList = inventoryItems.filter(item => item.dataValues.idInventory === element.dataValues?.inventory.dataValues.id);
      inventoryList.forEach(inventory => {
        const items = inventory.dataValues?.items;
        const inventoryName = inventory.dataValues?.inventoryModel?.dataValues?.name;

        items.forEach(item => {
          const alerts = JSON.parse(item.dataValues?.alerts);
          const itemName = item.dataValues?.name;
          if (alerts.length > 0) {
            alerts.forEach(alert => {
              if (alert.type === 'date' && new Date(alert.date) > getPreviousDay()) {
                MailSender.addMail({
                  to: email,
                  subject: `Alerta de vencimiento del inventario ${inventoryName} del item ${itemName}`,
                  text: alert.message,
                  from: 'CAMDA INC',
                });
              } else if (alert.type === 'existences' && conditionChecker(alert.condition, item.dataValues?.amount, alert.amount)) {
                MailSender.addMail({
                  to: email,
                  subject: `Alerta de cantidad del inventario ${inventoryName} del item ${itemName}`,
                  text: alert.message,
                  from: 'CAMDA INC',
                });
              }
            });
          }
        });
      });
    });

    MailSender.sendMails();
  }
}

export default Alerts;
