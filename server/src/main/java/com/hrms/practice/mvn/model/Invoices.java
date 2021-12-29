package com.hrms.practice.mvn.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;

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
    private double amount;

    @Column(name = "status")
    private String status;

    @Column(name = "invoice_date")
    private String invoice_date;

    @Column(name = "due_date")
    private String due_date;

    @Column(name = "deleted")
    private boolean deleted;

    @Transient
    List<InvoiceItems> invoiceItems;

    

    @Transient
    Client client;


    public List<InvoiceItems> getInvoiceItems() {
        return this.invoiceItems;
    }

    public void setInvoiceItems(List<InvoiceItems> invoiceItems) {
        this.invoiceItems = invoiceItems;
    }


    public Client getClient() {
        return this.client;
    }

    public void setClient(Client client) {
        this.client = client;
    }


    

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

    public double getAmount() {
        return this.amount;
    }

    public void setAmount(double amount) {
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