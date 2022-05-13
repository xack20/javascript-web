package com.hrms.practice.mvn.repository;

import com.hrms.practice.mvn.model.Experience;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ExperienceRepository extends JpaRepository<Experience, Long> {

    @Query(value="SELECT * FROM testdb.experience WHERE user_id = ?1",nativeQuery = true)
    Experience findByUserId(long id);

    

}