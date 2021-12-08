package com.backend.hrms.service;

import com.backend.hrms.model.User;
import com.backend.hrms.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User getUserByUsername(String username) {
        return userRepository.findUserByUsername(username);
    }
}