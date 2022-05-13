package com.hrms.practice.mvn.service;

import java.util.Map;

import com.hrms.practice.mvn.Config;
import com.hrms.practice.mvn.model.Leave;
import com.hrms.practice.mvn.payload.Response;
import com.hrms.practice.mvn.repository.LeaveRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class LeaveService {

    @Autowired
    private LeaveRepository leaveRepository;

    @Autowired
    private EmployeeService employeeService;
    
    public ResponseEntity<?>  Applyleave(Map<String,Object>body)  {

        try {
            Leave leave = new Leave();

            if(body == null)
                return ResponseEntity.badRequest().body(new Response(true,"Invalid Request Body!",null));
            
            if((String)body.get("type")!= null && !((String)body.get("type")).equals("") )leave.setLeaveType((String)body.get("type"));
            if((String)body.get("reason")!= null && !((String)body.get("reason")).equals("") )leave.setReason((String)body.get("reason"));
            if((String)body.get("from")!= null && !((String)body.get("from")).equals("") )leave.setFrom((String)body.get("from"));
            if((String)body.get("to")!= null && !((String)body.get("to")).equals("") )leave.setTo((String)body.get("to"));
            if((String)body.get("days")!= null && !((String)body.get("days")).equals("") )leave.setDays(Long.valueOf((String)body.get("days")));
    
    
            leave.setStatus("Pending");
            leave.setDeleted(false);
    
            leave.setAppliedBy(employeeService.getUserByUsername(Config.user_now).getId());
            
            return ResponseEntity.ok().body(new Response(true,"Leave applied successfully",leaveRepository.save(leave)));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new Response(true,e.getMessage(),null));
        }

    }

    public ResponseEntity<?>  GetAllLeave()  {
        return ResponseEntity.ok().body(new Response(true, "All leaves!", leaveRepository.findAllActive()));
    }

    public ResponseEntity<?>  GetAllLeaveById()  {
        Long user_id = employeeService.getUserByUsername(Config.user_now).getId();
        return ResponseEntity.ok().body(new Response(true, "All Leaves appllied by "+ user_id, leaveRepository.findAllbyUserId(user_id)));
    }

    public ResponseEntity<?>  LeaveStatusChange(Map<String,Object>body)  {
        try {
            Long user_id = employeeService.getUserByUsername(Config.user_now).getId();

            Leave leave = leaveRepository.findLeaveById((Long)body.get("leave_id"));
            if((String)body.get("status")!= null && !((String)body.get("status")).equals("") )leave.setStatus((String)body.get("status"));
    
            leave.setApprovedBy(user_id);
            return ResponseEntity.ok().body(new Response(true, "Leave status changed!", leaveRepository.save(leave)));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new Response(true, e.getMessage(), null));
        }
    }

    public ResponseEntity<?>  DeleteLeave(Map<String,Object>body)  {
        try {
            Long user_id = employeeService.getUserByUsername(Config.user_now).getId();
            Leave leave = leaveRepository.findLeaveById((Long)body.get("leave_id"));
    
            if(leave.getAppliedBy() == user_id || Config.user_role.equals("ADMIN")) {
                if((Boolean)body.get("deleted")!= null)leave.setDeleted((Boolean)body.get("deleted"));
                leaveRepository.save(leave);
                return ResponseEntity.ok().body(new Response(true, "Leave deleted!", null));
            }
    
            return ResponseEntity.badRequest().body(new Response(false, "You are not authorized to delete this leave!", null));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new Response(false, e.getMessage(), null));
        }
    }

    public ResponseEntity<?>  UpdateLeave(Map<String,Object>body)  {

        try {
            if(body == null)
                return ResponseEntity.badRequest().body(new Response(true,"Invalid Request Body!",null));

            Long user_id = employeeService.getUserByUsername(Config.user_now).getId();
            Leave leave = leaveRepository.findLeaveById((Long)body.get("leave_id"));

            if(leave.getAppliedBy() == user_id || Config.user_role.equals("ADMIN")) {
                
            
                if((String)body.get("type")!= null && !((String)body.get("type")).equals("") )leave.setLeaveType((String)body.get("type"));
                if((String)body.get("reason")!= null && !((String)body.get("reason")).equals("") )leave.setReason((String)body.get("reason"));
                if((String)body.get("from")!= null && !((String)body.get("from")).equals("") )leave.setFrom((String)body.get("from"));
                if((String)body.get("to")!= null && !((String)body.get("to")).equals("") )leave.setTo((String)body.get("to"));
                if((String)body.get("days")!= null && !((String)body.get("days")).equals("") )leave.setDays(Long.valueOf((String)body.get("days")));

                return ResponseEntity.ok().body(new Response(true, "Leave updated!", leaveRepository.save(leave)));
            }

            return ResponseEntity.badRequest().body(new Response(false, "You are not authorized to update this leave!", null));
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return ResponseEntity.badRequest().body(new Response(false, e.getMessage(), null));
        }

        
    }


}