package com.hrms.practice.mvn.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


import org.springframework.stereotype.Component;

@Entity
@Table(name = "education")
@Component
public class Experience{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "fi_id")
    private int ed_id;

    @Column(name = "company_name")
    private int company_name;

    @Column(name = "designation")
    private int designation;

    @Column(name = "from_date")
    private int from_date;

    @Column(name = "to_date")
    private int to_date;

    
}
