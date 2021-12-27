package com.hrms.practice.mvn.repository;

import com.hrms.practice.mvn.model.EmergencyContact;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface EmergencyContactRepository extends JpaRepository<EmergencyContact, Long> {

    @Query(value="SELECT * FROM testdb.emergency_contacts WHERE user_id = ?1",nativeQuery = true)
    EmergencyContact findByUserId(long id);

    

}