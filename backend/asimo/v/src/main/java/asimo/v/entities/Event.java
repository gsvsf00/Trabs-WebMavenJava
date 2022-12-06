package asimo.v.entities;

import asimo.v.entities.enums.EventStatus;
import asimo.v.entities.enums.MovieType;
import asimo.v.entities.objects.EventObject;

import java.util.Date;
import java.util.UUID;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "evento")
public class Event{

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

	@Column(name="eventidentifier")
	private String eventIdentifier;

	@NotNull
    private String name;

    @Column
    private Date eventStartDate;

    @Column
    private Date eventEndDate;
    
	private String duration;

	private Integer classification;

	@Column(name = "launchyear")
	private Integer launchYear;

	@Size(max=2000)
    private String synopsis;

	@Column(name = "type")
	private MovieType movieType;

	private EventStatus eventStatus;

	public EventStatus getEventStatus() {
		return eventStatus;
	}

	public void setEventStatus(EventStatus eventStatus) {
		this.eventStatus = eventStatus;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}


	public String getSynopsis() {
		return synopsis;
	}

	public void setSynopsis(String synopsis) {
		this.synopsis = synopsis;
	}

	public String getDuration() {
		return duration;
	}

	public void setDuration(String duration) {
		this.duration = duration;
	}

	public Integer getClassification() {
		return classification;
	}

	public void setClassification(Integer classification) {
		this.classification = classification;
	}

	public Integer getLaunchYear() {
		return launchYear;
	}

	public void setLaunchYear(Integer launchYear) {
		this.launchYear = launchYear;
	}

	public MovieType getMovieType() {
		return movieType;
	}

	public void setMovieType(MovieType movieType) {
		this.movieType = movieType;
	}

	public String getEventIdentifier() {
		return eventIdentifier;
	}

	public void setEventIdentifier(String eventIdentifier) {
		this.eventIdentifier = eventIdentifier;
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

	public Event(Long id, String eventIdentifier, @NotNull String name, Date eventStartDate, Date eventEndDate,
			String duration, Integer classification, Integer launchYear, @Size(max = 2000) String synopsis,
			MovieType movieType) {
		super();
		this.id = id;
		this.eventIdentifier = UUID.randomUUID().toString();
		this.name = name;
		this.eventStartDate = eventStartDate;
		this.eventEndDate = eventEndDate;
		this.duration = duration;
		this.classification = classification;
		this.launchYear = launchYear;
		this.synopsis = synopsis;
		this.movieType = movieType;
	}

	public Event(EventObject eventObject) {
		this.name = eventObject.getName();
		this.setEventIdentifier(UUID.randomUUID().toString());
		this.eventStartDate = eventObject.getEventStartDate();
		this.eventEndDate = eventObject.getEventEndDate();
		this.synopsis = eventObject.getSynopsis();
		this.duration = eventObject.getDuration();
		this.classification = eventObject.getClassification();
		this.launchYear = eventObject.getLaunchYear();
		this.movieType = eventObject.getMovieType();
		this.eventStatus = EventStatus.AGENDADO;
	}

	public Event() {}

	@Override
	public String toString() {
		return "Event [id=" + id + ", eventIdentifier=" + eventIdentifier + ", name=" + name + ", eventStartDate="
				+ eventStartDate + ", eventEndDate=" + eventEndDate + ", duration=" + duration + ", classification="
				+ classification + ", launchYear=" + launchYear + ", synopsis=" + synopsis + ", movieType=" + movieType
				+ ", eventStatus=" + eventStatus + "]";
	}
}
