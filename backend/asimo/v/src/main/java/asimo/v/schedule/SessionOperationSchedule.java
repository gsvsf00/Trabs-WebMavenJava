package asimo.v.schedule;

import java.util.List;

import asimo.v.entities.enums.EventStatus;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import asimo.v.entities.Session;
import asimo.v.repositories.SessionRepository;
import asimo.v.services.SessionService;

@Component
public class SessionOperationSchedule {

	private SessionService sessionService;

	private SessionRepository sessionRepository;
	
	public SessionOperationSchedule(SessionService sessionService, SessionRepository sessionRepository) {
		this.sessionService = sessionService;
		this.sessionRepository = sessionRepository;
	}

	@Scheduled(fixedDelay = 6000)
	public void sessionFinalize() {
		List<Session> sessions = sessionService.listToFinalize();
		for(Session session : sessions) {
			session.setSessiosStatus(EventStatus.FINALIZADO);
			this.sessionRepository.save(session);
		}	
	}
	
	@Scheduled(fixedDelay = 6000)
	public void sessionInitialize() {
		List<Session> sessions = sessionService.listToInitializer();
		for(Session session : sessions) {
			session.setSessiosStatus(EventStatus.EM_ANDAMENTO);
			this.sessionRepository.save(session);
		}
	}
}
