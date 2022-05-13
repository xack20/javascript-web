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
    private Long bi_id;

    @Column(name = "name")
    private String name;

    @Column(name = "relashionship")
    private String relashionship;

    @Column(name = "birthday")
    private String birthday;

    @Column(name = "phone")
    private String phone;

    @Column(name = "user_id")
    private Long user_id;






    

    public Long getBi_id() {
        return this.bi_id;
    }

    public void setBi_id(Long bi_id) {
        this.bi_id = bi_id;
    }


    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRelashionship() {
        return this.relashionship;
    }

    public void setRelashionship(String relashionship) {
        this.relashionship = relashionship;
    }


    public String getBirthday() {
        return this.birthday;
    }

    public void setBirthday(String birthday) {
        this.birthday = birthday;
    }


    public String getPhone() {
        return this.phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }


    public Long getUser_id() {
        return this.user_id;
    }

    public void setUser_id(Long user_id) {
        this.user_id = user_id;
    }

    
}
