package com.hrms.practice.mvn.repository;
import java.util.List;

import com.hrms.practice.mvn.model.Job;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface JobRepository  extends JpaRepository<Job, Long> {


    @Query(value="SELECT * FROM testdb.jobs WHERE job_id = ?1 AND deleted = false",nativeQuery = true)
    Job FindByJobId(Long job_id);


    @Query(value="SELECT * FROM testdb.jobs WHERE job_id = ?1",nativeQuery = true)
    Job findByJobIdForDelete(Long id);


    @Query(value="SELECT * FROM testdb.jobs WHERE deleted = false",nativeQuery = true)
    List<Job> findAllActive();
}