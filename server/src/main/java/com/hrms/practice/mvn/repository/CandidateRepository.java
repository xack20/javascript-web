package com.hrms.practice.mvn.repository;
import java.util.List;

import com.hrms.practice.mvn.model.Candidates;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface CandidateRepository  extends JpaRepository<Candidates, Long> {
    @Query(value="SELECT * FROM testdb.candidates WHERE candidate_id = ?1 AND deleted = false",nativeQuery = true)
    Candidates FindByCandidateId(Long candidate_id);


    @Query(value="SELECT * FROM testdb.candidates WHERE candidate_id = ?1",nativeQuery = true)
    Candidates findByCandidateIdForDelete(Long id);


    @Query(value="SELECT * FROM testdb.candidates WHERE deleted = false",nativeQuery = true)
    List<Candidates> findAllActive();
}