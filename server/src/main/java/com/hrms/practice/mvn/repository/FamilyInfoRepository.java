package com.hrms.practice.mvn.repository;

import com.hrms.practice.mvn.model.FamilyInfo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FamilyInfoRepository extends JpaRepository<FamilyInfo, Long> {
    

}