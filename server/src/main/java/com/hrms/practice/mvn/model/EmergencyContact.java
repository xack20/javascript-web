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
    private int ec_id;

    @Column(name = "name")
    private int name;

    @Column(name = "relashionship")
    private int relashionship;

    @Column(name = "phone")
    private int phone;





    

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


    public int getPhone() {
        return this.phone;
    }

    public void setPhone(int phone) {
        this.phone = phone;
    }
    
	public int getId() {
		return ec_id;
	}

	public void setId(int id) {
		this.ec_id = id;
	}

	
      
}