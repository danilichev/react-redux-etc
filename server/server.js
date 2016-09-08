var koa = require('koa');  
var app = koa();

app.use(function *(){  
    this.body = 'Hello from Koa.js';
});

app.listen(3000);
