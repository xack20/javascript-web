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
    private long bi_id;

    @Column(name = "bank_name")
    private String bank_name;

    @Column(name = "account_no")
    private String account_no;

    @Column(name = "ifsc_code")
    private String ifsc_code;

    @Column(name = "user_id")
    private long user_id;


    public long getBi_id() {
        return this.bi_id;
    }

    public void setBi_id(long bi_id) {
        this.bi_id = bi_id;
    }



    public String getBank_name() {
        return this.bank_name;
    }

    public void setBank_name(String bank_name) {
        this.bank_name = bank_name;
    }

    public String getAccount_no() {
        return this.account_no;
    }

    public void setAccount_no(String account_no) {
        this.account_no = account_no;
    }



    public String getIfsc_code() {
        return this.ifsc_code;
    }

    public void setIfsc_code(String ifsc_code) {
        this.ifsc_code = ifsc_code;
    }


    public long getUser_id() {
        return this.user_id;
    }

    public void setUser_id(long user_id) {
        this.user_id = user_id;
    }


    
}
