package com.hrms.practice.mvn.repository;

import com.hrms.practice.mvn.model.Education;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface EducationRepository extends JpaRepository<Education, Long> {

    @Query(value="SELECT * FROM testdb.education WHERE user_id = ?1",nativeQuery = true)
    Education findByUserId(long id);

    

}