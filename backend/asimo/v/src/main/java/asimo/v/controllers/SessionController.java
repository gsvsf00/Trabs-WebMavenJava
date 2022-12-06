package asimo.v.controllers;

import java.util.List;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import asimo.v.entities.Session;
import asimo.v.entities.operation.SessionOperation;
import asimo.v.services.LoginSessionService;
import asimo.v.services.SessionService;

@RestController
@RequestMapping("/session")
public class SessionController {

    private SessionService sessionService;

    private LoginSessionService loginSessionService;
    
    public SessionController(SessionService service, LoginSessionService loginSessionService) {
		this.sessionService = service;
		this.loginSessionService = loginSessionService;
	}

	@PostMapping(value = "/create", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> create(@RequestHeader("token") final String token,
									@RequestBody SessionOperation sessionOperation){
		this.loginSessionService.validateToken(token);
		Session session = this.sessionService.create(sessionOperation, loginSessionService.findUser(token));
		return ResponseEntity.ok(session);
	}

	@GetMapping(value = "/available",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Session>> availableSession(@RequestHeader("token") String token) {
		this.loginSessionService.validateToken(token);
		return ResponseEntity.ok(sessionService.listAllAvailable());
    }

	@GetMapping(value = "/public/available",produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<Session>> availableSession() {
		return ResponseEntity.ok(sessionService.listAllAvailable());
	}

	@GetMapping(value = "/find",produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Session> findByIdentifier(@RequestHeader("identifier") String identifier,
			@RequestHeader("token") String token) {
		this.loginSessionService.validateToken(token);
		return ResponseEntity.ok(sessionService.findBySessionIdentifier(identifier));
	}
}
