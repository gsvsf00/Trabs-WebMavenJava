package asimo.v.repositories;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import asimo.v.entities.Event;
import asimo.v.entities.enums.EventStatus;

@Repository
public interface EventRepository extends JpaRepository<Event,Long> {

    Optional<Event> findByNameAndEventStartDateAndLaunchYear(String name, Date eventStartDate, Integer launchYear);

    Optional<Event> findByNameAndEventStartDate(String name, Date eventDate);

    Optional<Event> findByEventIdentifier(String identifier);

    List<Event> findByEventStatus(EventStatus eventStatus);
}
