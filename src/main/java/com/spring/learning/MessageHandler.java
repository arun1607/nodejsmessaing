package com.spring.learning;

import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Component;

/**
 * Created by amits on 17/11/14.
 */
@Component

class MessageHandler {

    @RabbitListener(queues = "myqueue")
    public void processMessage(String data) {
        System.out.println("Received message :"+ data);
    }
}
