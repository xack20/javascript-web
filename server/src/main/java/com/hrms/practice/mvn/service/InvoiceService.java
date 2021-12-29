package com.hrms.practice.mvn.service;

import java.util.List;
import java.util.Map;

import com.hrms.practice.mvn.model.Invoices;
import com.hrms.practice.mvn.repository.InvoiceRepository;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

@Service
public class InvoiceService {
    @Autowired
    private InvoiceRepository invoiceRepository;

    public List<Invoices> All_Invoices()  {
        return invoiceRepository.findAll();
    }

    public Invoices Add_invoice(Map<String, Object> body) {

        Invoices invoice = new Invoices();

        if(body != null){
            if(body.get("cleint_id")!=null)invoice.setClient_id((long) body.get("client_id"));
            if(body.get("project_id")!=null) invoice.setProject_id((long) body.get("project_id"));
            if(body.get("amount") != null)invoice.setAmount((long) body.get("amount"));
            if(body.get("status")!=null)invoice.setStatus((String) body.get("status"));
            if(body.get("invoice_data")!=null)invoice.setInvoice_date((String) body.get("invoice_date"));
            if(body.get("due_date")!=null)invoice.setDue_date((String) body.get("due_date"));

            invoiceRepository.save(invoice);

            return invoice;
        }
        return null;
    }
}