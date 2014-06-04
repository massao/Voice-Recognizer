var connect = require('connect');
var path = require('path');
connect().use(connect.static(path.join(__dirname, 'public'))).listen(3000);
console.log('server running on localhost:3000');
