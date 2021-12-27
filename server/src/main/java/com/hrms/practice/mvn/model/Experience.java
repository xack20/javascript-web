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
    private Long ed_id;

    @Column(name = "company_name")
    private String company_name;

    @Column(name = "designation")
    private String designation;

    @Column(name = "from_date")
    private String from_date;

    @Column(name = "to_date")
    private String to_date;

    @Column(name = "user_id")
    private Long user_id;


    
    public Long getEd_id() {
        return this.ed_id;
    }

    public void setEd_id(Long ed_id) {
        this.ed_id = ed_id;
    }


    public String getCompany_name() {
        return this.company_name;
    }

    public void setCompany_name(String company_name) {
        this.company_name = company_name;
    }


    public String getDesignation() {
        return this.designation;
    }

    public void setDesignation(String designation) {
        this.designation = designation;
    }



    public String getFrom_date() {
        return this.from_date;
    }

    public void setFrom_date(String from_date) {
        this.from_date = from_date;
    }



    public String getTo_date() {
        return this.to_date;
    }

    public void setTo_date(String to_date) {
        this.to_date = to_date;
    }



    public Long getUser_id() {
        return this.user_id;
    }

    public void setUser_id(Long user_id) {
        this.user_id = user_id;
    }
    
}
