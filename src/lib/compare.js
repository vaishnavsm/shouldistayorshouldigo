import { days, janPriorTo, monthPriorTo, months } from "./utils";

const computeMonthly= (job) => job.salary/12 * (1 - job.tax/100) - job.expenses;
  
export const computeForDate = ({oldJob, newJob, date, compareTill}) => {
  date = monthPriorTo(date);
  const oldJobBonusStarts = janPriorTo(date) > new Date(oldJob.joiningDate) ? janPriorTo(date) : new Date(oldJob.joiningDate);
  const oldJobBonus = (janPriorTo(compareTill) < oldJobBonusStarts) ? 0 : (1 - oldJob.tax/100) * oldJob.bonus * (days(janPriorTo(compareTill).getTime() - oldJobBonusStarts.getTime())/days(janPriorTo(compareTill).getTime() - janPriorTo(date).getTime())) || 0;
  const newJobBonus = (janPriorTo(compareTill) < date) ? 0 : (1 - newJob.tax/100) * newJob.bonus * (days(janPriorTo(compareTill).getTime() - date.getTime())/days(janPriorTo(compareTill).getTime() - janPriorTo(date).getTime())) || 0
  console.log({n1: days(janPriorTo(compareTill).getTime() - date.getTime()), d1: days(janPriorTo(compareTill).getTime() - janPriorTo(date).getTime())})
  const numberOfMonths = months(compareTill.getTime() - date.getTime());
  const oldJobSavings = computeMonthly(oldJob) * numberOfMonths;
  const newJobSavings = computeMonthly(newJob) * numberOfMonths;

  return newJobSavings + newJobBonus - oldJobSavings - oldJobBonus - newJob.shiftingExpenses;
}