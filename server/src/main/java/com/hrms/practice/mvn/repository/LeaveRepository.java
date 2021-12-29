package com.hrms.practice.mvn.repository;


import java.util.List;

import com.hrms.practice.mvn.model.Leave;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface LeaveRepository extends JpaRepository<Leave, Long> {

    @Query(value="SELECT * FROM testdb.leaves WHERE deleted = false",nativeQuery = true)
    List<Leave> findAllActive();

    @Query(value="SELECT * FROM testdb.leaves WHERE deleted = false AND applied_by = ?1",nativeQuery = true)
    List<Leave> findAllbyUserId(Long id);

    @Query(value="SELECT * FROM testdb.leaves WHERE deleted = false AND leave_id = ?1",nativeQuery = true)
    Leave findLeaveById(Long leave_id);

}