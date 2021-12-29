package com.hrms.practice.mvn.repository;


import com.hrms.practice.mvn.model.Invoices;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface InvoiceRepository extends JpaRepository<Invoices, Integer> {
    @Query(value="SELECT * FROM testdb.invoices WHERE invoice_id = ?1",nativeQuery = true)
    Invoices findByInvoiceId(Long invoice_id);
}