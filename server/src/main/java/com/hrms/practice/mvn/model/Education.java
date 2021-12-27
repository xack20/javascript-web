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
    private long ed_id;

    @Column(name = "ssc")
    private String ssc;

    @Column(name = "hsc")
    private String hsc;

    @Column(name = "bsc")
    private String bsc;

    @Column(name = "msc")
    private String msc;

    @Column(name = "user_id")
    private long user_id;


    public long getEd_id() {
        return this.ed_id;
    }

    public void setEd_id(long ed_id) {
        this.ed_id = ed_id;
    }


    public String getSsc() {
        return this.ssc;
    }

    public void setSsc(String ssc) {
        this.ssc = ssc;
    }



    public String getHsc() {
        return this.hsc;
    }

    public void setHsc(String hsc) {
        this.hsc = hsc;
    }



    public String getBsc() {
        return this.bsc;
    }

    public void setBsc(String bsc) {
        this.bsc = bsc;
    }

    public String getMsc() {
        return this.msc;
    }

    public void setMsc(String msc) {
        this.msc = msc;
    }


    public long getUser_id() {
        return this.user_id;
    }

    public void setUser_id(long user_id) {
        this.user_id = user_id;
    }

    
}
