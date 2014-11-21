var restify = require('restify');
var amqp = require('amqp');


var server = restify.createServer();


var connection = amqp.createConnection({host: 'localhost'});
var MessageSender = function () {
};


var queueConnectionCallback = function(queue) {
    MessageSender.prototype.sendMessage = function(queueName, message) {
        connection.publish(queueName, message, {contentType:'application/json',
            headers:{
                type:'range'
            }
        });
    };
};
connection.on('ready', function () {
    connection.queue('myqueue', {'durable': true, 'autoDelete': false}, queueConnectionCallback);
});

var messageSender = new MessageSender();

function sendMessage(req, res) {
    var message = {msg : req.params.message,age : 23};
    messageSender.sendMessage("myqueue",JSON.stringify(message));
    res.send("Message sent " + req.params.message);
}

server.get('/send/:message', sendMessage);

server.listen(3000, function () {
    console.log('%s listening at %s', server.name, server.url);
});