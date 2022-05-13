package com.hrms.practice.mvn.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


import org.springframework.stereotype.Component;

@Entity
@Table(name = "invoice_items")
@Component
public class InvoiceItems {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "item_id")
    private Long item_id;

    @Column(name = "invoice_id")
    private Long invoice_id;

    @Column(name = "unit_cost")
    private double unit_cost;

    @Column(name = "quantity")
    private Long quantity;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;
    




    public Long getInvoice_id() {
        return this.invoice_id;
    }

    public void setInvoice_id(Long invoice_id) {
        this.invoice_id = invoice_id;
    }

    public Long getItem_id() {
        return this.item_id;
    }

    public void setItem_id(Long item_id) {
        this.item_id = item_id;
    }


    public double getUnit_cost() {
        return this.unit_cost;
    }

    public void setUnit_cost(double unit_cost) {
        this.unit_cost = unit_cost;
    }


    public Long getQuantity() {
        return this.quantity;
    }

    public void setQuantity(Long quantity) {
        this.quantity = quantity;
    }


    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }


    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

	
      
}