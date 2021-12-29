package com.hrms.practice.mvn.repository;
import java.util.List;

import com.hrms.practice.mvn.model.Candidates;
import com.hrms.practice.mvn.model.Jobs;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface JobRepository  extends JpaRepository<Jobs, Long> {
    // @Query(value="SELECT * FROM testdb.candidates WHERE candidate_id = ?1 AND deleted = false",nativeQuery = true)
    // Candidates findByCandidateId(Long candidate_id);


    // @Query(value="SELECT * FROM testdb.invoices WHERE invoice_id = ?1",nativeQuery = true)
    // Invoices findByInvoiceIdForDelete(Long id);


    // @Query(value="SELECT * FROM testdb.invoices WHERE deleted = false",nativeQuery = true)
    // List<Invoices> findAllActive();
}