package com.hrms.practice.mvn.repository;


import com.hrms.practice.mvn.model.Invoices;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InvoiceRepository extends JpaRepository<Invoices, Integer> {
    Invoices findByInvoiceId(String invoice_id);
}