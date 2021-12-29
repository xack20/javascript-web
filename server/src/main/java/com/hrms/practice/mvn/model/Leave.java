package com.hrms.practice.mvn.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


import org.springframework.stereotype.Component;

@Entity
@Table(name = "leaves")
@Component
public class Leave {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "leave_id" , unique = true)
    private Long leaveId;

    @Column(name = "type")
    private String leaveType;

    @Column(name = "reason")
    private String reason;

    @Column(name = "status")
    private String status;

    @Column(name = "from")
    private String from;

    @Column(name = "to")
    private String to;

    @Column(name = "days")
    private Long days;

    @Column(name = "applied_by")
    private Long appliedBy;
    
    @Column(name = "approved_by")
    private Long approvedBy;

    @Column(name = "deleted")
    private boolean deleted;



    public Long getLeaveId() {
        return leaveId;
    }


    public void setLeaveId(Long leaveId) {
        this.leaveId = leaveId;
    }


    public String getLeaveType() {
        return leaveType;
    }


    public void setLeaveType(String leaveType) {
        this.leaveType = leaveType;
    }


    public String getReason() {
        return reason;
    }



    public void setReason(String reason) {
        this.reason = reason;
    }


    public String getStatus() {
        return status;
    }


    public void setStatus(String status) {
        this.status = status;
    }


    public String getFrom() {
        return from;
    }


    public void setFrom(String from) {
        this.from = from;
    }


    public String getTo() {
        return to;
    }


    public void setTo(String to) {
        this.to = to;
    }



    public Long getDays() {
        return days;
    }


    public void setDays(Long days) {
        this.days = days;
    }


    public Long getAppliedBy() {
        return appliedBy;
    }


    public void setAppliedBy(Long appliedBy) {
        this.appliedBy = appliedBy;
    }


    public Long getApprovedBy() {
        return approvedBy;
    }


    public void setApprovedBy(Long approvedBy) {
        this.approvedBy = approvedBy;
    }


    public boolean isDeleted() {
        return deleted;
    }



    public void setDeleted(boolean deleted) {
        this.deleted = deleted;
    }




























}   