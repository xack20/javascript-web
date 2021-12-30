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
    private Long invoice_id;

    @Column(name = "client_id")
    private Long client_id;

    @Column(name = "client_name")
    private String client_name;

    @Column(name = "clinet_address")
    private String clinet_address;

    @Column(name = "client_email")
    private String client_email;

    @Column(name = "billing_address")
    private String billing_address;

    @Column(name = "project_name")
    private String project_name;



    

    public void setProject_name(String project_name) {
        this.project_name = project_name;
    }

    @Column(name = "project_id")
    private Long project_id;

    @Column(name = "amount")
    private double amount;

    @Column(name = "status")
    private String status;

    @Column(name = "invoice_date")
    private String invoice_date;

    @Column(name = "due_date")
    private String due_date;

    @Column(name = "deleted")
    private boolean deleted = false;

    @Transient
    List<InvoiceItems> invoiceItems;

    

    @Transient
    Client client;


    
    public String getClient_name() {
        return this.client_name;
    }

    public void setClient_name(String client_name) {
        this.client_name = client_name;
    }



    public String getClinet_address() {
        return this.clinet_address;
    }

    public void setClinet_address(String clinet_address) {
        this.clinet_address = clinet_address;
    }


    public String getClient_email() {
        return this.client_email;
    }

    public void setClient_email(String client_email) {
        this.client_email = client_email;
    }



    public String getBilling_address() {
        return this.billing_address;
    }

    public void setBilling_address(String billing_address) {
        this.billing_address = billing_address;
    }


    public String getProject_name() {
        return this.project_name;
    }


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


    public Long getInvoice_id() {
        return this.invoice_id;
    }

    public void setInvoice_id(Long invoice_id) {
        this.invoice_id = invoice_id;
    }


    public Long getClient_id() {
        return this.client_id;
    }

    public void setClient_id(Long client_id) {
        this.client_id = client_id;
    }


    public Long getProject_id() {
        return this.project_id;
    }

    public void setProject_id(Long project_id) {
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