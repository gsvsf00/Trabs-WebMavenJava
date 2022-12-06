package asimo.v.entities.objects;

import asimo.v.entities.enums.EventStatus;
import asimo.v.entities.enums.MovieType;

import javax.validation.constraints.NotNull;
import java.util.Date;

public class EventObject {

    @NotNull
    private String name;

    @NotNull
    private Date eventStartDate;

    @NotNull
    private Date eventEndDate;

    @NotNull
    private String duration;

    @NotNull
    private Integer classification;

    @NotNull
    private Integer launchYear;

    @NotNull
    private String synopsis;

    @NotNull
    private MovieType movieType;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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

}
