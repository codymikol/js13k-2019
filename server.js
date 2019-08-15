var express = require('express');
var app = express();
app.use(express.static('dist'));
app.listen(process.env.PORT || 8080);
console.log('Listening on port:' + (process.env.PORT || 8080));
