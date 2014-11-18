Sample application to demostrate messaging support for node js.

The node js will work as message producer and java application will be consumer.

for running the program node must be installed on system.

For installing node js dependencies run following in project folder.

$ npm install 

For build java classes run followinf command

$ mvn install 

start node js with command 

$ node sender.js 

Import the project in eclipse and start java application with main file "RabbitQExmaple.java"

open browser and point to 

http://localhost:3000/send/<message>

Any text provided in <message> will be sent to messaging queue and will be read by java client.

There must me Rabbit MQ running on localhost on default port.

Installation instruction for RabbitMQ can be found at https://www.rabbitmq.com/download.html
