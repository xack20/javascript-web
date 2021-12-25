package com.hrms.practice.mvn.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.stereotype.Component;

@Entity
@Table(name = "employees")
@Component
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "emp_id")
    private long emp_id;

    @Column(name = "firstname")
    private String fullname;

    @Column(name = "lastname")
    private String lastname;

    @Column(name = "email", unique = true)
    private String email;

    @Column(name = "employee_id", unique = true)
    private String employee_id;

    @Column(name = "phone_number", unique = true)
    private String phoneNumber;

    @Column(name = "designation")
    private String designation;

    @Column(name = "department")
    private String department;

}
