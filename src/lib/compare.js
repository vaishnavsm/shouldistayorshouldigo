import { days, janPriorTo, monthPriorTo, months } from "./utils";

const computeMonthly= (job) => job.salary/12 * (1 - job.tax/100) - job.expenses;
  
const computeGrowth = ({principal, times, rate}) => {
  let sum = 0;
  for(let i = 0; i<times; ++i){
    sum = sum * rate;
    sum += principal;
  }
  return sum;
}

export const computeForDate = ({growth, inflation, growTill, oldJob, newJob, date, compareTill}) => {
  date = monthPriorTo(date);
  if(!growTill || growTill < compareTill) growTill = compareTill;
  const oldJobBonusStarts = janPriorTo(date) > new Date(oldJob.joiningDate) ? janPriorTo(date) : new Date(oldJob.joiningDate);
  const oldJobBonus = (janPriorTo(compareTill) < oldJobBonusStarts) ? 0 : (1 - oldJob.tax/100) * oldJob.bonus * (days(janPriorTo(compareTill).getTime() - oldJobBonusStarts.getTime())/days(janPriorTo(compareTill).getTime() - janPriorTo(date).getTime())) || 0;
  const newJobBonus = (janPriorTo(compareTill) < date) ? 0 : (1 - newJob.tax/100) * newJob.bonus * (days(janPriorTo(compareTill).getTime() - date.getTime())/days(janPriorTo(compareTill).getTime() - janPriorTo(date).getTime())) || 0
  
  const monthlyGrowth = (Math.pow(1 + growth/100, 1/12)/Math.pow(1 + inflation/100, 1/12));

  const numberOfMonths = months(compareTill.getTime() - date.getTime());
  const oldJobSavings = computeGrowth({principal: computeMonthly(oldJob), rate: monthlyGrowth, times: numberOfMonths});
  const newJobSavings = computeGrowth({principal: computeMonthly(newJob), rate: monthlyGrowth, times: numberOfMonths});

  return Math.pow(monthlyGrowth, months(growTill.getTime() - compareTill.getTime()))*(newJobSavings + newJobBonus) - Math.pow(monthlyGrowth, months(growTill.getTime() - compareTill.getTime()))*(oldJobSavings - oldJobBonus) - newJob.shiftingExpenses;
}