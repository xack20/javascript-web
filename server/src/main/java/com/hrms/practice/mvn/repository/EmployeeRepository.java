package com.hrms.practice.mvn.repository;


import com.hrms.practice.mvn.model.Employee;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    Employee findEmployeeByUsernameIgnoreCase(String username);

    @Query(value="SELECT * FROM testdb.employees WHERE employee_id = ?1",nativeQuery = true)
    Employee findByEmployeeId(long id);

    Boolean existsByUsernameIgnoreCase(String username);
}

