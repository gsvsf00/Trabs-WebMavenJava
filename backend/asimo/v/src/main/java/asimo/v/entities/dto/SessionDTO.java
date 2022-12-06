package asimo.v.entities.dto;

import java.util.Date;

public class SessionDTO {

	private String eventName;
	
	private String sessionId;
	
	private Date sessionStartDate;

	private Integer avaliableQuantity;

	public String getEventName() {
		return eventName;
	}

	public void setEventName(String eventName) {
		this.eventName = eventName;
	}

	public String getSessionId() {
		return sessionId;
	}

	public void setSessionId(String sessionId) {
		this.sessionId = sessionId;
	}

	public Date getSessionStartDate() {
		return sessionStartDate;
	}

	public void setSessionStartDate(Date sessionStartDate) {
		this.sessionStartDate = sessionStartDate;
	}

	public Integer getAvaliableQuantity() {
		return avaliableQuantity;
	}

	public void setAvaliableQuantity(Integer avaliableQuantity) {
		this.avaliableQuantity = avaliableQuantity;
	}
}
