const cron = require('node-cron');

let count=0
const notySchedule = () => cron.schedule('* * * * *', () => {
  console.log(`Notificaiton no ${++count} sent at ${coutn}th munite.`)
});

module.exports = notySchedule
