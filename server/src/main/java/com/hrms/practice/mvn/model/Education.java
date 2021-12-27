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
public class Education{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "fi_id")
    private int ed_id;

    @Column(name = "ssc")
    private int ssc;

    @Column(name = "hsc")
    private int hsc;

    @Column(name = "bsc")
    private int bsc;

    @Column(name = "msc")
    private int msc;

    
}
