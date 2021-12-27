package com.hrms.practice.mvn.repository;

import com.hrms.practice.mvn.model.EmergencyContact;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmergencyContactRepository extends JpaRepository<EmergencyContact, Long> {

    

}