package asimo.v.entities.dto;

import java.util.Date;

import asimo.v.entities.Session;

public class EventBillingDTO {
	
	private String eventName;
	
	private Float amountValue;

	private Date sessionStartDate;
	
	private Integer totalSeats;

	private Integer saleSeats;

	private String ticketValue;
	
	public EventBillingDTO(String eventName, Float amountValue, Date sessionStartDate, Integer totalSeats,
			Integer saleSeats, String ticketValue) {
		this.eventName = eventName;
		this.amountValue = amountValue;
		this.sessionStartDate = sessionStartDate;
		this.totalSeats = totalSeats;
		this.saleSeats = saleSeats;
		this.ticketValue = ticketValue;
	}

	public EventBillingDTO(Session session, Integer amountSold, Long soldAmount) {
		this.eventName = session.getEvent().getName();
		this.amountValue = (float) soldAmount;
		this.sessionStartDate = session.getSessionStartDate();
		this.totalSeats = session.getNumberOfSeats();
		this.saleSeats = amountSold;
		this.ticketValue = session.getTicketPrice().toString();
	}
	
	public EventBillingDTO() {}
	
	public Integer getTotalSeats() {
		return totalSeats;
	}

	public void setTotalSeats(Integer totalSeats) {
		this.totalSeats = totalSeats;
	}

	public Integer getSaleSeats() {
		return saleSeats;
	}

	public void setSaleSeats(Integer saleSeats) {
		this.saleSeats = saleSeats;
	}

	public String getEventName() {
		return eventName;
	}

	public void setEventName(String eventName) {
		this.eventName = eventName;
	}

	public Float getAmountValue() {
		return amountValue;
	}

	public void setAmountValue(Float amountValue) {
		this.amountValue = amountValue;
	}

	public Date getSessionStartDate() {
		return sessionStartDate;
	}

	public void setSessionStartDate(Date sessionStartDate) {
		this.sessionStartDate = sessionStartDate;
	}

	public String getTicketValue() {
		return ticketValue;
	}

	public void setTicketValue(String ticketValue) {
		this.ticketValue = ticketValue;
	}
}
