package com.hrms.practice.mvn.repository;


import com.hrms.practice.mvn.model.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findUserByUsernameIgnoreCase(String username);

    @Query(value="SELECT * FROM testdb.users WHERE user_id = ?1",nativeQuery = true)
    User findByUserId(long id);

    Boolean existsByUsernameIgnoreCase(String username);

    // @Modifying
    // @Query(value="DELETE FROM testdb.users WHERE user_id = ?1",nativeQuery = true)
    // int deleteByUserId(long id);

    @Modifying
    int deleteUserById(long id);
}

