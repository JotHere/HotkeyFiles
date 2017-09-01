const fs = require('fs');

r = /KCGUID/g; // code within placeholder text to be replaced
s = fs.readFileSync('buf.txt', 'utf8') // placeholder text

// generate ID from current time; based on function UTC70s36_KCSJ8B
t = Math.floor((new Date).getTime()/1000).toString(36).toUpperCase();

// replace each instance of placeholder code with generated ID
console.log(s.replace(r,t));
