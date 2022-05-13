package com.hrms.practice.mvn.service;

import java.util.Map;

import com.hrms.practice.mvn.model.Candidates;
import com.hrms.practice.mvn.payload.Response;
import com.hrms.practice.mvn.repository.CandidateRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class CandidateService {

    @Autowired
    private CandidateRepository candidateRepository;


    public ResponseEntity<?>  allCandidate(){
        try {
            return ResponseEntity.ok().body(new Response(true,"All Jobs",candidateRepository.findAllActive()));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new Response(false,e.getMessage(),null));
        }
    }


    public ResponseEntity<?>  applyJob(Map<String,Object>body){

        try {
            Candidates candidate = new Candidates();

            if(body == null)
                return ResponseEntity.badRequest().body(new Response(false,"Invalid Request Body!",null));

                if(body.get("firstname")!= null && !((String)body.get("firstname")).equals("") )candidate.setFirstname((String)body.get("firstname"));
                if(body.get("lastname")!= null && !((String)body.get("lastname")).equals("") )candidate.setLastname((String)body.get("lastname"));
                if(body.get("phone_number")!= null && !((String)body.get("phone_number")).equals("") )candidate.setPhone_number((String)body.get("phone_number"));
                if(body.get("email")!= null && !((String)body.get("email")).equals("") )candidate.setEmail((String)body.get("email"));
                if(body.get("description")!= null && !((String)body.get("description")).equals("") )candidate.setDescription((String)body.get("description"));
            
                candidate.setDeleted(false);

            return ResponseEntity.ok().body(new Response(true,"Candidate created successfully",candidateRepository.save(candidate)));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new Response(false,e.getMessage(),null));
        }
    }





    public ResponseEntity<?>  deleteCandidate(Long candidate_id, Map<String,Object>body){
        try {
            Candidates candidate = candidateRepository.findByCandidateIdForDelete(candidate_id);
            if(candidate == null)
                return ResponseEntity.badRequest().body(new Response(false,"Candidate not found!",null));
            
            
            if(body == null)
                return ResponseEntity.badRequest().body(new Response(false,"Invalid Request Body!",null));

            if(body.get("deleted")!= null )candidate.setDeleted((Boolean)body.get("deleted"));

            candidateRepository.save(candidate);

            return ResponseEntity.ok().body(new Response(true,"Candidate Deleted Successfully", null));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new Response(false,e.getMessage(),null));
        }

    }

    public ResponseEntity<?>  updateCandidate(Long candidate_id,Map<String,Object>body){
        try {
            Candidates candidate = candidateRepository.FindByCandidateId(candidate_id);

            if(candidate == null)
                return ResponseEntity.badRequest().body(new Response(false,"Job not found!",null));

            if(body == null)
                return ResponseEntity.badRequest().body(new Response(false,"Invalid Request Body!",null));
                
                
                if(body.get("recruitment_status")!= null && !((String)body.get("recruitment_status")).equals("") )candidate.setRecruitment_status((String)body.get("recruitment_status"));
           
            
            return ResponseEntity.ok().body(new Response(true,"Candidate recruitment status updated successfully",candidateRepository.save(candidate)));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new Response(false,e.getMessage(),null));
        }
        
    }
    
}
