package com.hrms.practice.mvn.controller;

import java.util.Map;

import com.hrms.practice.mvn.service.LeaveService;

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

@RequestMapping("/leave")
@RestController
public class LeaveController {
    
    @Autowired
    LeaveService leaveService;

    @PostMapping("/apply")
	public ResponseEntity<?> Applyleave(@RequestBody Map<String,Object>body) {

		return leaveService.Applyleave(body);
	}

    @GetMapping("/all")
    public ResponseEntity<?> GetAllLeave() {
        
        return leaveService.GetAllLeave();
    }

    @GetMapping("/")
    public ResponseEntity<?> GetAllLeaveById() {

        return leaveService.GetAllLeaveById();
    }


    @PutMapping("/change-status/{id}")
	public ResponseEntity<?> LeaveStatusChange(@PathVariable Long id, @RequestBody Map<String,Object>body) {
        body.put("leave_id", id);
        // System.out.println(id);
		return leaveService.LeaveStatusChange(body);
	}

    @DeleteMapping("/delete/{id}")
	public ResponseEntity<?> DeleteLeave(@PathVariable Long id,@RequestBody Map<String,Object>body) {
        body.put("leave_id", id);
		return leaveService.DeleteLeave(body);
	}


    @PutMapping("/update/{id}")
	public ResponseEntity<?> UpdateLeave(@PathVariable Long id,@RequestBody Map<String,Object>body) {
        body.put("leave_id", id);
		return leaveService.UpdateLeave(body);
	}



}
