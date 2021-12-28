package com.hrms.practice.mvn.repository;


import com.hrms.practice.mvn.model.InvoiceItems;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InvoiceItemRepository extends JpaRepository<InvoiceItems, Integer> {
    InvoiceItems findByItemId(String item_id);
}