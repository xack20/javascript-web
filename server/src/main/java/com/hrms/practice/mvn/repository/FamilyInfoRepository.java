package com.hrms.practice.mvn.repository;

import com.hrms.practice.mvn.model.FamilyInfo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface FamilyInfoRepository extends JpaRepository<FamilyInfo, Long> {

    @Query(value="SELECT * FROM testdb.family_info WHERE user_id = ?1",nativeQuery = true)
    FamilyInfo findByUserId(long id);
    

}