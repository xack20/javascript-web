package com.hrms.practice.mvn.repository;

import java.util.List;

import com.hrms.practice.mvn.model.Client;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ClientRepository extends JpaRepository<Client, Long> {
    @Query(value="SELECT * FROM testdb.clients WHERE client_id = ?1 AND deleted = false",nativeQuery = true)
    Client findByClientId(long id);


    @Query(value="SELECT * FROM testdb.clients WHERE client_id = ?1",nativeQuery = true)
    Client findByClientIdForDelete(long id);

    
    @Modifying
    @Query(value="DELETE FROM testdb.clients WHERE client_id = ?1",nativeQuery = true)
    int deleteByClientId(long id);

    @Query(value="SELECT * FROM testdb.clients WHERE deleted = false",nativeQuery = true)
    List<Client> findAllActive();
}
