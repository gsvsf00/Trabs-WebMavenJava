package asimo.v.controllers;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import asimo.v.entities.Event;
import asimo.v.entities.Session;
import asimo.v.entities.dto.SaleDTO;
import asimo.v.entities.operation.SaleOperation;
import asimo.v.services.EventService;
import asimo.v.services.LoginSessionService;
import asimo.v.services.SaleService;
import asimo.v.services.SessionService;
import asimo.v.services.UserService;

import javax.persistence.Entity;

@RestController
@RequestMapping("/sale")
public class SaleController {

    private SaleService saleService;

    private LoginSessionService loginSessionService;

    private SessionService sessionService;

    private UserService userService;

    private EventService eventService;

    public SaleController(SaleService saleService, LoginSessionService loginSessionService, SessionService sessionService, UserService userService, EventService eventService) {
        this.saleService = saleService;
        this.loginSessionService = loginSessionService;
        this.sessionService = sessionService;
        this.userService = userService;
        this.eventService = eventService;
    }

    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<SaleDTO> create(@RequestHeader("token") String token, @RequestHeader String eventidentifier,
    		@RequestHeader String sessionidentifier, @RequestBody SaleOperation saleOperation){
        this.loginSessionService.validateToken(token);
        this.userService.findByToken(token);
        Session session = this.sessionService.findBySessionIdentifier(sessionidentifier);
        Event event = this.eventService.findByEventIdentifier(eventidentifier);

        return ResponseEntity.ok(this.saleService.makeTheSales(event,session,saleOperation,saleOperation.getTicketOperationList()));
    }


}
