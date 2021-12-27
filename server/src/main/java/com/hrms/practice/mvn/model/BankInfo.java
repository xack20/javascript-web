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

    @Column(name = "user_id")
    private int user_id;


    public int getBi_id() {
        return this.bi_id;
    }

    public void setBi_id(int bi_id) {
        this.bi_id = bi_id;
    }



    public int getBank_name() {
        return this.bank_name;
    }

    public void setBank_name(int bank_name) {
        this.bank_name = bank_name;
    }

    public int getAccount_no() {
        return this.account_no;
    }

    public void setAccount_no(int account_no) {
        this.account_no = account_no;
    }



    public int getIfsc_code() {
        return this.ifsc_code;
    }

    public void setIfsc_code(int ifsc_code) {
        this.ifsc_code = ifsc_code;
    }


    public int getUser_id() {
        return this.user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }


    
}
