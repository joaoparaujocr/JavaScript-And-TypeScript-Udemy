const { html } = require('./base');

// const regExp = /<.+>.+<\/.+>/;

console.log(html.match(/<.+>.+<\/.+>/g)); // greedy
console.log(html.match(/<.+?>.+?<\/.+?>/g)); // no - greedy
console.log(html.match(/<div>.+?<\/div>/g)); // somente a div