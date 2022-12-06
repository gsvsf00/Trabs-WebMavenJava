package asimo.v.entities.operation;

import asimo.v.entities.enums.EventStatus;

import javax.validation.constraints.NotNull;
import java.util.Date;

public class SessionOperation {

    @NotNull
    private Date sessionStartDate;

    @NotNull
    private Date sessionEndDate;

    @NotNull
    private String eventIdentifier;

    @NotNull
    private Long ticketPrice;

    @NotNull
    private Integer numberOfSeats;

    public String getEventIdentifier() {
        return eventIdentifier;
    }

    public void setEventIdentifier(String eventIdentifier) {
        this.eventIdentifier = eventIdentifier;
    }

    public Long getTicketPrice() {
        return ticketPrice;
    }

    public void setTicketPrice(Long ticketPrice) {
        this.ticketPrice = ticketPrice;
    }

    public Integer getNumberOfSeats() {
        return this.numberOfSeats;
    }

    public void setNumberOfSeats(Integer numberOfSeats) {
        this.numberOfSeats = numberOfSeats;
    }

    public SessionOperation() {
    }

	public Date getSessionStartDate() {
		return sessionStartDate;
	}

	public void setSessionStartDate(Date sessionStartDate) {
		this.sessionStartDate = sessionStartDate;
	}

	public Date getSessionEndDate() {
		return sessionEndDate;
	}

	public void setSessionEndDate(Date sessionEndDate) {
		this.sessionEndDate = sessionEndDate;
	}



    public SessionOperation(Date sessionStartDate, Date sessionEndDate, String eventIdentifier, Long ticketPrice,  Integer numberOfSeats) {
        this.sessionStartDate = sessionStartDate;
        this.sessionEndDate = sessionEndDate;
        this.eventIdentifier = eventIdentifier;
        this.ticketPrice = ticketPrice;
        this.numberOfSeats = numberOfSeats;
    }
}
