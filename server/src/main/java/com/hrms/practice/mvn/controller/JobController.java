package com.hrms.practice.mvn.controller;
import java.util.Map;

import com.hrms.practice.mvn.service.JobService;

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

@RequestMapping("/job")
@RestController
public class JobController {

    @Autowired
    JobService jobService;

    @PostMapping("/new")
	public ResponseEntity<?> createJob(@RequestBody Map<String,Object>body) {

		return jobService.createJob(body);
	}


    @GetMapping("/")
    public ResponseEntity<?> allJobs() {

        return jobService.allJobs();
    }


    @GetMapping("/{id}")
	public ResponseEntity<?> jobDetails(@PathVariable Long id) {
        // body.put("leave_id", id);
		return jobService.jobDetails(id);
	}

    @DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deleteJob(@PathVariable Long id,@RequestBody Map<String,Object>body) {
        // body.put("job_id", id);
		return jobService.deleteJob(id, body);
	}


    @PutMapping("/update/{id}")
	public ResponseEntity<?> updateJob(@PathVariable Long id,@RequestBody Map<String,Object>body) {
        // body.put("leave_id", id);
		return jobService.updateJob(id, body);
	}

    
}
