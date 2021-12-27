package com.hrms.practice.mvn.payload;

public class Response {

	private boolean status;
	private String message;
	private Object additionalPayload;
	public boolean getStatus() {
		return status;
	}
	public void setStatus(boolean status) {
		this.status = status;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public Object getAdditionalPayload() {
		return additionalPayload;
	}
	public void setAdditionalPayload(Object addtionalPayload) {
		this.additionalPayload = addtionalPayload;
	}
	public Response(Boolean status, String message, Object addtionalPayload) {
		super();
		this.status = status;
		this.message = message;
		this.additionalPayload = addtionalPayload;
	}

}
