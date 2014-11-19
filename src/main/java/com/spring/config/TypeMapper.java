package com.spring.config;

import org.springframework.amqp.support.converter.DefaultClassMapper;

/**
 * Created by amits on 19/11/14.
 */

public class TypeMapper extends DefaultClassMapper {
    @Override
    public String getClassIdFieldName() {
        return "type";
    }
}
