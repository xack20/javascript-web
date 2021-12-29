package com.hrms.practice.mvn.repository;


import java.util.List;

import com.hrms.practice.mvn.model.Invoices;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface InvoiceRepository extends JpaRepository<Invoices, Long> {
    @Query(value="SELECT * FROM testdb.invoices WHERE invoice_id = ?1 AND deleted = false",nativeQuery = true)
    Invoices findByInvoiceId(Long invoice_id);


    @Query(value="SELECT * FROM testdb.invoices WHERE invoice_id = ?1",nativeQuery = true)
    Invoices findByInvoiceIdForDelete(Long id);


    @Query(value="SELECT * FROM testdb.clients WHERE deleted = false",nativeQuery = true)
    List<Invoices> findAllActive();
}