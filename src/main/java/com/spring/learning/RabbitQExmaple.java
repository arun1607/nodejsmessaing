package com.spring.learning;

import com.spring.config.RabbitConfiguration;
import org.springframework.amqp.core.AmqpTemplate;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

/**
 * Created by amits on 17/11/14.
 */
public class RabbitQExmaple {
    public static void main(String[] args) throws InterruptedException {
        ApplicationContext context =
                new AnnotationConfigApplicationContext(RabbitConfiguration.class);

    }

}
