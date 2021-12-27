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

    @Column(name = "user_id")
    private int user_id;






    

    public int getBi_id() {
        return this.bi_id;
    }

    public void setBi_id(int bi_id) {
        this.bi_id = bi_id;
    }


    public int getName() {
        return this.name;
    }

    public void setName(int name) {
        this.name = name;
    }

    public int getRelashionship() {
        return this.relashionship;
    }

    public void setRelashionship(int relashionship) {
        this.relashionship = relashionship;
    }


    public int getBirthday() {
        return this.birthday;
    }

    public void setBirthday(int birthday) {
        this.birthday = birthday;
    }


    public int getPhone() {
        return this.phone;
    }

    public void setPhone(int phone) {
        this.phone = phone;
    }


    public int getUser_id() {
        return this.user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    
}
