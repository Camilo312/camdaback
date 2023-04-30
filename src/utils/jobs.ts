import cron from 'cron';

class Jobs {
  private static jobs: cron.CronJob[] = [];

  public static createJob(time: string, callback: () => void) {
    const job = new cron.CronJob(time, callback);
    this.jobs.push(job);
  }

  public static startJobs() {
    this.jobs.forEach(job => job.start());
  }
}

export default Jobs;
