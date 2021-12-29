package com.hrms.practice.mvn.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


import org.springframework.stereotype.Component;

@Entity
@Table(name = "invoices")
@Component
public class Invoices {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "invoice_id")
    private long invoice_id;

    @Column(name = "client_id")
    private long client_id;

    @Column(name = "project_id")
    private long project_id;

    @Column(name = "amount")
    private long amount;

    @Column(name = "status")
    private String status;

    @Column(name = "invoice_date")
    private String invoice_date;

    @Column(name = "due_date")
    private String due_date;

    @Column(name = "deleted")
    private boolean deleted;



    

    public boolean isDeleted() {
        return this.deleted;
    }

    public void setDeleted(boolean deleted) {
        this.deleted = deleted;
    }


    public long getInvoice_id() {
        return this.invoice_id;
    }

    public void setInvoice_id(long invoice_id) {
        this.invoice_id = invoice_id;
    }


    public long getClient_id() {
        return this.client_id;
    }

    public void setClient_id(long client_id) {
        this.client_id = client_id;
    }


    public long getProject_id() {
        return this.project_id;
    }

    public void setProject_id(long project_id) {
        this.project_id = project_id;
    }

    public long getAmount() {
        return this.amount;
    }

    public void setAmount(long amount) {
        this.amount = amount;
    }


    public String getStatus() {
        return this.status;
    }

    public void setStatus(String status) {
        this.status = status;
    }


    public String getInvoice_date() {
        return this.invoice_date;
    }

    public void setInvoice_date(String invoice_date) {
        this.invoice_date = invoice_date;
    }



    public String getDue_date() {
        return this.due_date;
    }

    public void setDue_date(String due_date) {
        this.due_date = due_date;
    }

	
      
}