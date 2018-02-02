var obj_group_info = new GroupInfoClass; console.log(obj_group_info.viewMembersInGroup());obj_group_info.showCreateGroupModel();
var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
}).listen(3000);