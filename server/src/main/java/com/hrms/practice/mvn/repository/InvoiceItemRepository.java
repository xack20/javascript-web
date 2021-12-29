package com.hrms.practice.mvn.repository;


import java.util.List;

import com.hrms.practice.mvn.model.InvoiceItems;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface InvoiceItemRepository extends JpaRepository<InvoiceItems, Integer> {

    @Query(value="SELECT * FROM testdb.invoice_items WHERE item_id = ?1",nativeQuery = true)
    InvoiceItems findByItemId(Long item_id);

    @Query(value="SELECT * FROM testdb.invoice_items WHERE invoice_id = ?1",nativeQuery = true)
    List<InvoiceItems> findAllByInvoiceId(long id);
    
}