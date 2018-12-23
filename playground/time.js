const moment = require('moment');

// Jan 1st 1970 00:00:00 am

// var date = new Date();
// var months = ['Jan', 'Feb'];
// console.log(date.getMonth());

// var date = moment();
// date.add(100, 'year').subtract(9, 'month');
// console.log(date.format('MMM Do, YYYY'));

// 10:35 am
// console.log(date.format('h:mm a'));

const someTimestamp = moment().valueOf();
console.log(someTimestamp);

const createdAt = 1234;
const date = moment(createdAt);
console.log(date.format('h:mm a'));
