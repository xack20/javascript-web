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

        Leave leave = new Leave();

        leave.setStatus("Pending");
        leave.setDeleted(false);

        leave.setAppliedBy(employeeService.getUserByUsername(Config.user_now).getId());
        leave.setLeaveType((String)body.get("type"));
        leave.setReason((String)body.get("reason"));
        leave.setFrom((String)body.get("from"));
        leave.setTo((String)body.get("to"));
        leave.setDays(Long.valueOf((String)body.get("days")));
        
        return ResponseEntity.ok(new Response(true,"Leave applied successfully",leaveRepository.save(leave)));
    }

    public ResponseEntity<?>  GetAllLeave()  {
        return ResponseEntity.ok().body(new Response(true, "All leaves!", leaveRepository.findAllActive()));
    }

    public ResponseEntity<?>  GetAllLeaveById()  {
        Long user_id = employeeService.getUserByUsername(Config.user_now).getId();
        return ResponseEntity.ok().body(new Response(true, "All Leaves appllied by "+ user_id, leaveRepository.findAllbyUserId(user_id)));
    }

    public ResponseEntity<?>  LeaveStatusChange(Map<String,Object>body)  {
        Long user_id = employeeService.getUserByUsername(Config.user_now).getId();

        Leave leave = leaveRepository.findLeaveById((Long)body.get("leave_id"));
        leave.setStatus((String)body.get("status"));

        leave.setApprovedBy(user_id);
        return ResponseEntity.ok().body(new Response(true, "Leave status changed!", leaveRepository.save(leave)));
    }

    public ResponseEntity<?>  DeleteLeave(Map<String,Object>body)  {
        Long user_id = employeeService.getUserByUsername(Config.user_now).getId();
        Leave leave = leaveRepository.findLeaveById(Long.valueOf((String)body.get("leave_id")));

        if(leave.getAppliedBy() == user_id || Config.user_role.equals("ADMIN")) {
            leave.setDeleted((boolean)body.get("deleted"));
            leaveRepository.save(leave);
            return ResponseEntity.ok().body(new Response(true, "Leave deleted!", null));
        }

        return ResponseEntity.badRequest().body(new Response(false, "You are not authorized to delete this leave!", null));
    }

    public ResponseEntity<?>  UpdateLeave(Map<String,Object>body)  {

        Long user_id = employeeService.getUserByUsername(Config.user_now).getId();
        Leave leave = leaveRepository.findLeaveById(Long.valueOf((String)body.get("leave_id")));

        if(leave.getAppliedBy() == user_id || Config.user_role.equals("ADMIN")) {
            leave.setLeaveType((String)body.get("type"));
            leave.setReason((String)body.get("reason"));
            leave.setFrom((String)body.get("from"));
            leave.setTo((String)body.get("to"));
            leave.setDays(Long.valueOf((String)body.get("days")));

            return ResponseEntity.ok().body(new Response(true, "Leave updated!", leaveRepository.save(leave)));
        }

        return ResponseEntity.badRequest().body(new Response(false, "You are not authorized to update this leave!", null));
    }


}