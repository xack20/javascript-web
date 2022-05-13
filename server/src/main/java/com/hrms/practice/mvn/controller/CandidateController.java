package com.hrms.practice.mvn.controller;

import java.util.Map;

import com.hrms.practice.mvn.service.CandidateService;

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

@RequestMapping("/candidate")
@RestController
public class CandidateController {

    @Autowired
    CandidateService candidateService;

    @PostMapping("/new")
	public ResponseEntity<?> applyJob(@RequestBody Map<String,Object>body) {

		return candidateService.applyJob(body);
	}

    @GetMapping("/")
    public ResponseEntity<?> allCandidate() {

        return candidateService.allCandidate();
    }
    

    @DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deleteCandidate(@PathVariable Long id,@RequestBody Map<String,Object>body) {
        // body.put("job_id", id);
		return candidateService.deleteCandidate(id, body);
	}


    @PutMapping("/update/{id}")
	public ResponseEntity<?> updateCandidate(@PathVariable Long id,@RequestBody Map<String,Object>body) {
        // body.put("leave_id", id);
		return candidateService.updateCandidate(id, body);
	}
}
