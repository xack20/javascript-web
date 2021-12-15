package com.hrms.practice.mvn.repository;


import com.hrms.practice.mvn.model.Employee;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    Employee findEmployeeByUsernameIgnoreCase(String username);
    Boolean existsByUsernameIgnoreCase(String username);
}

