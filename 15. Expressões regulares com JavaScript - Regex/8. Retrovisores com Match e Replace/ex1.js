const { html2 } = require('./base');

// $1 $2 $3 -> retrovisores \1


//console.log(html2.match(/<(\w+)[\s\S]*?>[\s\S]*?<\/\1>/g));

console.log(html2.replace(/(<(\w+)[\s\S]*?>)([\s\S]*?)(<\/\2>)/g, '$1"$3"$4'));
