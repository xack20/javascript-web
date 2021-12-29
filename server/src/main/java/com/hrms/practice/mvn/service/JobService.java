package com.hrms.practice.mvn.service;

import java.util.Map;

import com.hrms.practice.mvn.model.Job;
import com.hrms.practice.mvn.payload.Response;
import com.hrms.practice.mvn.repository.JobRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class JobService {

    @Autowired
    private JobRepository jobRepository;


    public ResponseEntity<?>  createJob(Map<String,Object>body){

        try {
            Job job = new Job();

            if(body == null)
                return ResponseEntity.badRequest().body(new Response(false,"Invalid Request Body!",null));

            if(body.get("title")!= null && !((String)body.get("title")).equals("") )job.setJob_title((String)body.get("title"));
            if(body.get("description")!= null && !((String)body.get("description")).equals("") )job.setDescription((String)body.get("description"));
            if(body.get("position")!= null && !((String)body.get("position")).equals("") )job.setJob_position((String)body.get("position"));
            if(body.get("salary")!= null )job.setSalary(Double.valueOf((String)body.get("salary")));
            if(body.get("work_hours")!= null ) job.setWork_hours(Double.valueOf((String)body.get("work_hours")));
            
            
            job.setDeleted(false);

            return ResponseEntity.ok().body(new Response(true,"Job created successfully",jobRepository.save(job)));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new Response(false,e.getMessage(),null));
        }
    }

    public ResponseEntity<?>  allJobs(){
        try {
            return ResponseEntity.ok().body(new Response(true,"All Jobs",jobRepository.findAllActive()));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new Response(false,e.getMessage(),null));
        }
    }

    public ResponseEntity<?>  jobDetails(Long job_id){
        try {
            return ResponseEntity.ok().body(new Response(true,"Job Details",jobRepository.FindByJobId(job_id)));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new Response(false,e.getMessage(),null));
        }

    }

    public ResponseEntity<?>  deleteJob(Long job_id, Map<String,Object>body){
        try {
            Job job = jobRepository.findByJobIdForDelete(job_id);
            if(job == null)
                return ResponseEntity.badRequest().body(new Response(false,"Job not found!",null));
            
            
            if(body == null)
                return ResponseEntity.badRequest().body(new Response(false,"Invalid Request Body!",null));

            if(body.get("deleted")!= null )job.setDeleted((Boolean)body.get("deteled"));

            jobRepository.save(job);

            return ResponseEntity.ok().body(new Response(true,"Job Deleted Successfully", null));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new Response(false,e.getMessage(),null));
        }

    }

    public ResponseEntity<?>  updateJob(Long job_id,Map<String,Object>body){
        try {
            Job job = jobRepository.FindByJobId(job_id);

            if(job == null)
                return ResponseEntity.badRequest().body(new Response(false,"Job not found!",null));

            if(body == null)
                return ResponseEntity.badRequest().body(new Response(false,"Invalid Request Body!",null));

            if(body.get("title")!= null && !((String)body.get("title")).equals("") )job.setJob_title((String)body.get("title"));
            if(body.get("description")!= null && !((String)body.get("description")).equals("") )job.setDescription((String)body.get("description"));
            if(body.get("position")!= null && !((String)body.get("position")).equals("") )job.setJob_position((String)body.get("position"));
            if(body.get("salary")!= null )job.setSalary(Double.valueOf((String)body.get("salary")));
            if(body.get("work_hours")!= null ) job.setWork_hours(Double.valueOf((String)body.get("work_hours")));
            
            return ResponseEntity.ok().body(new Response(true,"Job updated successfully",jobRepository.save(job)));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new Response(false,e.getMessage(),null));
        }
        
    }
    
}
