package com.hrms.practice.mvn.repository;

import com.hrms.practice.mvn.model.BankInfo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BankInfoRepository extends JpaRepository<BankInfo, Long> {

    

}