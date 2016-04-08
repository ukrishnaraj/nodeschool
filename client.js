var http = require('http');
var options={
  host:'mail.com',
  path:'/email'
};
http.get(options,function(response){
  var body='';
  response.on('data',function(text){
    response.setEncoding('utf8');   
    body += text;
  });
  response.on('end',function(){
    console.log(body);

  });
});