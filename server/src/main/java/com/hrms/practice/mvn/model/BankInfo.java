package com.hrms.practice.mvn.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


import org.springframework.stereotype.Component;

@Entity
@Table(name = "bank_info")
@Component
public class BankInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "bi_id")
    private int bi_id;

    @Column(name = "bank_name")
    private int bank_name;

    @Column(name = "account_no")
    private int account_no;

    @Column(name = "ifsc_code")
    private int ifsc_code;

    
}
