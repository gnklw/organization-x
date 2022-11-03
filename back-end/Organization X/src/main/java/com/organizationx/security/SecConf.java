package com.organizationx.security;

import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@EnableWebSecurity
public class SecConf {

	
    @Bean
    public SecurityFilterChain configure(HttpSecurity http) throws Exception {
        return http
        		.cors()
        		.and()
        		.csrf().disable()
        		.authorizeRequests().anyRequest().not().authenticated()
        		.and()
                .build();
    }
}