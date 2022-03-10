const { ips } = require('./base');

// const regExp = /[0-9]{1,3}\.(0|[1-9]{1,3})\.[0-9]{1,3}\.[0-9]{1,3}/g;
const regExp = /((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)/g;

console.log(ips.match(regExp));