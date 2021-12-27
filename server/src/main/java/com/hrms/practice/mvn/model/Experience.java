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

    @Column(name = "user_id")
    private int user_id;


    
    public int getEd_id() {
        return this.ed_id;
    }

    public void setEd_id(int ed_id) {
        this.ed_id = ed_id;
    }


    public int getCompany_name() {
        return this.company_name;
    }

    public void setCompany_name(int company_name) {
        this.company_name = company_name;
    }


    public int getDesignation() {
        return this.designation;
    }

    public void setDesignation(int designation) {
        this.designation = designation;
    }



    public int getFrom_date() {
        return this.from_date;
    }

    public void setFrom_date(int from_date) {
        this.from_date = from_date;
    }



    public int getTo_date() {
        return this.to_date;
    }

    public void setTo_date(int to_date) {
        this.to_date = to_date;
    }



    public int getUser_id() {
        return this.user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }
    
}
