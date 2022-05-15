package com.hrms.practice.mvn.service;

import java.util.Map;

import com.hrms.practice.mvn.payload.Response;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class DashboardService {
    
    public ResponseEntity<?> adminDashboard() {
        return ResponseEntity.ok().body(new Response(true, "Welcome to Admin Dashboard", null));

        // try {
        //     Job job = new Job();

        //     if (body == null)
        //         return ResponseEntity.badRequest().body(new Response(false, "Invalid Request Body!", null));

        //     if (body.get("title") != null && !((String) body.get("title")).equals(""))
        //         job.setJob_title((String) body.get("title"));
        //     if (body.get("description") != null && !((String) body.get("description")).equals(""))
        //         job.setDescription((String) body.get("description"));
        //     if (body.get("position") != null && !((String) body.get("position")).equals(""))
        //         job.setJob_position((String) body.get("position"));
        //     if (body.get("salary") != null)
        //         job.setSalary(Double.valueOf((String) body.get("salary")));
        //     if (body.get("work_hours") != null)
        //         job.setWork_hours(Double.valueOf((String) body.get("work_hours")));

        //     job.setDeleted(false);

        //     return ResponseEntity.ok().body(new Response(true, "Job created successfully", jobRepository.save(job)));
        // } catch (Exception e) {
        //     return ResponseEntity.badRequest().body(new Response(false, e.getMessage(), null));
        // }
    }


    public ResponseEntity<?> employeeDashboard(long id) {
        return ResponseEntity.ok().body(new Response(true, "Welcome to Employee Dashboard", null));

        // try {
        // Job job = new Job();

        // if (body == null)
        // return ResponseEntity.badRequest().body(new Response(false, "Invalid Request
        // Body!", null));

        // if (body.get("title") != null && !((String) body.get("title")).equals(""))
        // job.setJob_title((String) body.get("title"));
        // if (body.get("description") != null && !((String)
        // body.get("description")).equals(""))
        // job.setDescription((String) body.get("description"));
        // if (body.get("position") != null && !((String)
        // body.get("position")).equals(""))
        // job.setJob_position((String) body.get("position"));
        // if (body.get("salary") != null)
        // job.setSalary(Double.valueOf((String) body.get("salary")));
        // if (body.get("work_hours") != null)
        // job.setWork_hours(Double.valueOf((String) body.get("work_hours")));

        // job.setDeleted(false);

        // return ResponseEntity.ok().body(new Response(true, "Job created
        // successfully", jobRepository.save(job)));
        // } catch (Exception e) {
        // return ResponseEntity.badRequest().body(new Response(false, e.getMessage(),
        // null));
        // }
    }
}
