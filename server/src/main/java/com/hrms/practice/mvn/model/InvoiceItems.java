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
    private long item_id;

    @Column(name = "invoice_id")
    private long invoice_id;

    @Column(name = "unit_cost")
    private long unit_cost;

    @Column(name = "quantity")
    private long quantity;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;
    




    public long getInvoice_id() {
        return this.invoice_id;
    }

    public void setInvoice_id(long invoice_id) {
        this.invoice_id = invoice_id;
    }

    public long getItem_id() {
        return this.item_id;
    }

    public void setItem_id(long item_id) {
        this.item_id = item_id;
    }


    public long getUnit_cost() {
        return this.unit_cost;
    }

    public void setUnit_cost(long unit_cost) {
        this.unit_cost = unit_cost;
    }


    public long getQuantity() {
        return this.quantity;
    }

    public void setQuantity(long quantity) {
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