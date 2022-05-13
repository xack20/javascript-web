package com.hrms.practice.mvn.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


import org.springframework.stereotype.Component;

@Entity
@Table(name = "emergency_contacts")
@Component
public class EmergencyContact {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ec_id")
    private long ec_id;

    @Column(name = "name")
    private String name;

    @Column(name = "relashionship")
    private String relashionship;

    @Column(name = "phone")
    private String phone;

    @Column(name = "user_id")
    private long user_id;




    
    public long getUser_id() {
        return this.user_id;
    }

    public void setUser_id(long user_id) {
        this.user_id = user_id;
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


    public String getPhone() {
        return this.phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }
    
	public Long getEc_Id() {
		return ec_id;
	}

	public void setEc_Id(Long id) {
		this.ec_id = id;
	}

	
      
}