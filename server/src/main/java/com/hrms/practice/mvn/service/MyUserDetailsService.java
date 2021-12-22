package com.hrms.practice.mvn.service;

import com.hrms.practice.mvn.model.User;
import com.hrms.practice.mvn.model.MyUserDetails;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class MyUserDetailsService implements UserDetailsService {
    @Autowired
    private UserService userService;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userService.getUserByUsername(username);

        if(user == null)
            throw new UsernameNotFoundException("User Not Found");

        return MyUserDetails.build(user);
    }
}