package asimo.v.entities.dto;

import java.util.Date;

import asimo.v.entities.enums.MovieType;

public class EventDTO {

	private String eventName;
	
	private Date eventStartDate;

	private Date eventEndDate;

	private Integer avaliableQuantity;

    private MovieType movieType;

	public String getEventName() {
		return eventName;
	}

	public void setEventName(String eventName) {
		this.eventName = eventName;
	}

	public Date getEventStartDate() {
		return eventStartDate;
	}

	public void setEventStartDate(Date eventStartDate) {
		this.eventStartDate = eventStartDate;
	}

	public Date getEventEndDate() {
		return eventEndDate;
	}

	public void setEventEndDate(Date eventEndDate) {
		this.eventEndDate = eventEndDate;
	}

	public Integer getAvaliableQuantity() {
		return avaliableQuantity;
	}

	public void setAvaliableQuantity(Integer avaliableQuantity) {
		this.avaliableQuantity = avaliableQuantity;
	}

	public MovieType getMovieType() {
		return movieType;
	}

	public void setMovieType(MovieType movieType) {
		this.movieType = movieType;
	}
}
