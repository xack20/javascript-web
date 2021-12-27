package com.hrms.practice.mvn.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


import org.springframework.stereotype.Component;

@Entity
@Table(name = "family_info")
@Component
public class FamilyInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "fi_id")
    private int bi_id;

    @Column(name = "name")
    private int name;

    @Column(name = "relashionship")
    private int relashionship;

    @Column(name = "birthday")
    private int birthday;

    @Column(name = "phone")
    private int phone;

    
}
