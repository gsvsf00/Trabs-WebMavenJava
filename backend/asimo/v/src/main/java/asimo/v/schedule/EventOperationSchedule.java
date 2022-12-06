package asimo.v.schedule;

import java.util.List;

import asimo.v.entities.enums.EventStatus;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import asimo.v.entities.Event;
import asimo.v.repositories.EventRepository;
import asimo.v.services.EventService;

@Component
public class EventOperationSchedule {

	private EventService eventService;
	
	private EventRepository eventRepository;

	public EventOperationSchedule(EventService eventService, EventRepository eventRepository) {
		this.eventService = eventService;
		this.eventRepository = eventRepository;
	}

	@Scheduled(fixedDelay = 6000)
	public void eventFinalize() {
		List<Event> events = eventService.listToFinalize();
		for(Event event : events) {
			event.setEventStatus(EventStatus.FINALIZADO);
			this.eventRepository.save(event);
		}	
	}
	
	@Scheduled(fixedDelay = 6000)
	public void eventInitialize() {
		List<Event> events = eventService.listToInitializer();
		for(Event event : events) {
			event.setEventStatus(EventStatus.EM_ANDAMENTO);
			this.eventRepository.save(event);
		}
	}
}