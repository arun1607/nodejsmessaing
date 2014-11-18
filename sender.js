var restify = require('restify');
var amqp = require('amqp');


var server = restify.createServer();


var connection = amqp.createConnection({host: 'localhost'});
var MessageSender = function () {
};
var messageSender = new MessageSender();


connection.on('ready', function () {
    connection.queue('myqueue', {'durable': true, 'autoDelete': false}, function (q) {
        this.MessageSender.prototype.sendMessage = function(queueName, message) {
            connection.publish(queueName, message);
        };
    }.bind({MessageSender: this.MessageSender}));
}.bind({MessageSender: MessageSender}));


function sendMessage(req, res) {
    messageSender.sendMessage("myqueue",req.params.message);
    res.send("Message sent " + req.params.message);
}

server.get('/send/:message', sendMessage);

server.listen(3000, function () {
    console.log('%s listening at %s', server.name, server.url);
});