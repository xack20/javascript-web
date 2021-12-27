package com.hrms.practice.mvn.repository;


import java.util.List;

import com.hrms.practice.mvn.model.Employee;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

    @Query(value="SELECT * FROM testdb.employees WHERE user_id = ?1",nativeQuery = true)
    Employee findByUserId(long id);

    
    @Modifying
    @Query(value="DELETE FROM testdb.employees WHERE user_id = ?1",nativeQuery = true)
    int deleteByUserId(long id);

    @Query(value="SELECT * FROM testdb.employees WHERE deleted = false",nativeQuery = true)
    List<Employee> findAllActive();

}

