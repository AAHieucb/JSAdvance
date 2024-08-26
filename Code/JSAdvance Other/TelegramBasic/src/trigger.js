// Ở đây ta dùng type module trong package json thì dùng được import bth
import schedule from 'node-schedule';
import main from './main.js';

const date = new Date(2023, 6, 2, 23, 19, 50); 

const job = schedule.scheduleJob(date, async () => {
  console.log("Run::");
  await main();
});
