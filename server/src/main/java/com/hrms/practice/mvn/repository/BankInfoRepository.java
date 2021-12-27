package com.hrms.practice.mvn.repository;

import com.hrms.practice.mvn.model.BankInfo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface BankInfoRepository extends JpaRepository<BankInfo, Long> {

    @Query(value="SELECT * FROM testdb.bank_info WHERE user_id = ?1",nativeQuery = true)
    BankInfo findByUserId(long id);

    

}