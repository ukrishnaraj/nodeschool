var fs = require("fs");


 
 
fs.readdir("../", function(err, items) {
    console.log(items);
 
    for (var i=0; i<items.length; i++) {
        console.log(items[i]);
        
    }
});