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

    @Column(name = "user_id")
    private int user_id;


    public int getEd_id() {
        return this.ed_id;
    }

    public void setEd_id(int ed_id) {
        this.ed_id = ed_id;
    }


    public int getSsc() {
        return this.ssc;
    }

    public void setSsc(int ssc) {
        this.ssc = ssc;
    }



    public int getHsc() {
        return this.hsc;
    }

    public void setHsc(int hsc) {
        this.hsc = hsc;
    }



    public int getBsc() {
        return this.bsc;
    }

    public void setBsc(int bsc) {
        this.bsc = bsc;
    }

    public int getMsc() {
        return this.msc;
    }

    public void setMsc(int msc) {
        this.msc = msc;
    }


    public int getUser_id() {
        return this.user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    
}
