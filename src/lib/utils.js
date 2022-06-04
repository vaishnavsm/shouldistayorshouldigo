export const janPriorTo = (date) => {
  const d = new Date(date);
  d.setMonth(0);
  d.setDate(1);
  d.setHours(0);
  d.setMinutes(0);
  d.setSeconds(0);
  d.setMilliseconds(0);
  return d;
}
export const monthPriorTo = (date) => {
  const d = new Date(date);
  d.setDate(1);
  d.setHours(0);
  d.setMinutes(0);
  d.setSeconds(0);
  d.setMilliseconds(0);
  return d;
}
export const days = (ms) => Math.floor(ms / 1000 / 3600 / 24);
export const months = (ms) => days(ms)/30;
export const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];
export const formatDate = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}-${month.length === 2 ? month : '0'+month}-${day.length === 2 ? day : '0'+day}`
}