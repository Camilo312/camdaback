export class ModelContainer {
  public static models = [];

  public static addModel(modelName: string, model: any): void {
    this.models[modelName] = model;
  }

  public static getModel(modelName: string): any {
    return this.models[modelName];
  }
}
