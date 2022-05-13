package com.hrms.practice.mvn.controller;

import java.util.List;
import java.util.Map;

import javax.transaction.Transactional;

import com.hrms.practice.mvn.Config;
import com.hrms.practice.mvn.model.Client;
import com.hrms.practice.mvn.payload.Response;
import com.hrms.practice.mvn.repository.ClientRepository;
import com.hrms.practice.mvn.service.ClientService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

// @SuppressWarnings("unchecked")
@RestController
@RequestMapping("/client")
public class ClientController {

    @Autowired
	private ClientRepository clientRepository;

    @Autowired
	private ClientService clientService;
    

    @GetMapping("/")
	public ResponseEntity<?> allClient() {
		
		List<Client> AllClients = clientRepository.findAllActive();
		
		return ResponseEntity.ok().body(new Response(true, "All Clients List!", AllClients));
	}



    @GetMapping("/{id}")
	public ResponseEntity<?> clientInfo(@PathVariable long id) {
		// System.out.println(id);
        // User user = userRepository.findByUserId(id);
		Client client = clientRepository.findByClientId(id);

		if(client == null) //|| user == null) 
			return ResponseEntity.badRequest().body(new Response(false, "No client found by this ID!", null));


		if(!Config.user_role.equals("ADMIN")) 
			return ResponseEntity.badRequest().body("You are not authorized to view this page!");

		// Map<String,Object>fullclientDetails= clientService.getOneEmployee(id);
	
		
		return ResponseEntity.ok().body(new Response(true, "User found!", client));
	}



    @PostMapping("/add")
	public ResponseEntity<?> addClient(@RequestBody Map<String,Object> payload) {

		// User USER = userRepository.findClientByClientIdIgnoreCase((String) payload.get("username"));
		
		// if(USER != null)
		// 	return ResponseEntity.badRequest().body(new Response(false, "Employee already exists!", null));
		
		Client client = clientService.saveClient(payload);
		return ResponseEntity.ok().body(new Response(true, "Client Added Successfully!", client));

	}




    @Transactional
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deleteClient(@PathVariable long id,@RequestBody Map<String,Object> payload) {
		
		boolean res = clientService.deleteClient(payload,id);

		if(res == false){
			return ResponseEntity.badRequest().body(new Response(true, "User Not Found!", null));	
		}

		return ResponseEntity.ok().body(new Response(true, "User deleted Successfully!", null));
	}




	@PutMapping("/update/{id}")
	public ResponseEntity<?> updateClient(@PathVariable long id,@RequestBody Map<String,Object> payload) {
		
		Client client = clientService.updateClient(payload,id);

		if(client == null){
			return ResponseEntity.badRequest().body(new Response(true, "Client Not Found!", null));	
		}

		return ResponseEntity.ok().body(new Response(true, "Client Updated Successfully!", client));
	}

    
    
}
