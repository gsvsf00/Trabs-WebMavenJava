package asimo.v.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import asimo.v.entities.Event;
import asimo.v.entities.Session;
import asimo.v.entities.dto.EventDTO;
import asimo.v.entities.dto.SessionDTO;
import asimo.v.repositories.SessionRepository;

@Service
public class ReportService {	

	private SessionService sessionService;

	private SessionRepository sessionRepository;
	
	public ReportService(SessionService sessionService, SessionRepository sessionRepository) {
		this.sessionService = sessionService;
		this.sessionRepository = sessionRepository;
	}

	public List<SessionDTO> generateSessionDTO(List<Session> sessions) {
		List<SessionDTO> sessionsDTO = new ArrayList<>();
		
		for(Session session: sessions) {
			SessionDTO sDTO = new SessionDTO();
			sDTO.setEventName(session.getEvent().getName());
			sDTO.setAvaliableQuantity(this.sessionService.availableSeats(session));
			sDTO.setSessionId(session.getId().toString());
			sDTO.setSessionStartDate(session.getSessionStartDate());
			
			sessionsDTO.add(sDTO);
		}
		return sessionsDTO;
	}

	public List<EventDTO> generateEventDTO(List<Event> events) {
		List<EventDTO> eventDTO = new ArrayList<>();
		
		for(Event event: events) {
			EventDTO eDTO = new EventDTO();
			eDTO.setEventName(event.getName());
			eDTO.setAvaliableQuantity(this.sessionService.availableEventSeats(sessionRepository.findByEvent(event)));
			eDTO.setMovieType(event.getMovieType());
			eDTO.setEventStartDate(event.getEventStartDate());
			eDTO.setEventEndDate(event.getEventEndDate());

			eventDTO.add(eDTO);
		}
		return eventDTO;
	}
}
