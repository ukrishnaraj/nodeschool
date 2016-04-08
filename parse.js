var fs = require('fs');
fs.readFile('log.txt','utf8',function(err,logData) {
	if (err) {throw err;}
	var text=logData.toString();
	console.log(text);
});
