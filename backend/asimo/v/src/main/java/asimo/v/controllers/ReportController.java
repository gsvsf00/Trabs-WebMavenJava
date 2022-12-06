package asimo.v.controllers;

import java.util.Date;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.bind.annotation.*;

import asimo.v.entities.Event;
import asimo.v.entities.Session;
import asimo.v.entities.dto.EventBillingDTO;
import asimo.v.entities.dto.EventDTO;
import asimo.v.entities.dto.SessionDTO;
import asimo.v.services.EventService;
import asimo.v.services.LoginSessionService;
import asimo.v.services.ReportService;
import asimo.v.services.SessionService;

@RestController
@RequestMapping("/report")
public class ReportController {

	private LoginSessionService loginSessionService;

	private ReportService reportService;

	private SessionService sessionService;
	
	private EventService eventService;
	
	public ReportController(LoginSessionService loginSessionService, ReportService reportService, SessionService sessionService,
			EventService eventService) {
		this.loginSessionService = loginSessionService;
		this.sessionService = sessionService;
		this.reportService = reportService;
		this.eventService = eventService;
	}

    @CrossOrigin(origins = "*")
	@GetMapping(value = "/session")
	public ResponseEntity<List<SessionDTO>> reportSession(@RequestHeader("token") String token,
			@RequestHeader("sessionIdentifier") String sessionIdentifier){
		this.loginSessionService.validateToken(token);
		List<Session> sessions = this.sessionService.listAllAvailable();
		return ResponseEntity.ok(this.reportService.generateSessionDTO(sessions));
	}

    @CrossOrigin(origins = "*")
	@GetMapping(value = "/event")
	public ResponseEntity<List<EventDTO>> reportEvent(@RequestHeader("token") String token){
		this.loginSessionService.validateToken(token);
		List<Event> events = this.eventService.listAllAvailable();
		return ResponseEntity.ok(this.reportService.generateEventDTO(events));
	}

    @CrossOrigin(origins = "*")
	@GetMapping(value = "/billing")
	public ResponseEntity<List<EventBillingDTO>> reportEventBilling(@RequestHeader("token") String token,
																		@RequestParam(name = "date", required=false) @DateTimeFormat(pattern = "yyyy-MM-dd") Date date, @RequestParam(name ="sessionIdentifier", required=false) String sessionId){
		this.loginSessionService.validateToken(token);
		List<EventBillingDTO> billing = this.eventService.billingGenerate(date, sessionId);
		return ResponseEntity.ok(billing);
	}
}
