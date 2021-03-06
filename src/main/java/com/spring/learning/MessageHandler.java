package com.spring.learning;

import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Component;

/**
 * Created by amits on 17/11/14.
 */
@Component
class MessageHandler {

    @RabbitListener(queues = "myqueue")
    public void processMessage(MyMessage myMessage) {

        System.out.println("Received message :" + myMessage.getMsg());
        System.out.println("Age is :"+myMessage.getAge());
    }
}
