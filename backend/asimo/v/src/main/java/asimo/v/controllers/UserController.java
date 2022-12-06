package asimo.v.controllers;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import asimo.v.entities.User;
import asimo.v.entities.objects.UserObject;
import asimo.v.entities.dto.UserDTO;
import asimo.v.entities.operation.UserOperation;
import asimo.v.services.LoginSessionService;
import asimo.v.services.UserService;

@RestController
@RequestMapping("/user")
public class UserController {

    private UserService userService;

    private LoginSessionService loginSessionService;
    
    public UserController(UserService userService, LoginSessionService loginSessionService) {
		this.userService = userService;
		this.loginSessionService = loginSessionService;
	}

    @PostMapping(value = "/login", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> login(@RequestBody final User userSession){
    	String token = this.userService.login(userSession);
    	return ResponseEntity.ok(token);
    }
    
    @PostMapping(value = "/logout", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> logout(@RequestHeader("token") final String token){
    	this.userService.logout(token);	
    	return ResponseEntity.ok("");
    }
    
    @PostMapping(value = "/create", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> create(@RequestBody final UserObject userSession){
    	User createdUser = this.userService.create(userSession);
    	return ResponseEntity.ok(createdUser.toString());
    }

    @PostMapping(value = "/create/admin", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> createAdmin(@RequestBody final User userSession,
    		@RequestHeader("token") String token){
    	this.loginSessionService.validateToken(token);
    	User createdUser = this.userService.createAdmin(userSession);
    	return ResponseEntity.ok(createdUser.toString());
    }

    @PostMapping(value = "/edit", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> edit(@RequestBody final UserOperation userEdit,
    		@RequestHeader("token") String token, @RequestHeader("userIdentifier") String identifier){
    	loginSessionService.validateToken(token);
    	this.userService.editUser(userEdit, this.userService.findByIdentifier(identifier));
    	return ResponseEntity.ok(true);
    }

    @GetMapping(value = "/findByToken", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<UserDTO> FindByToken(@RequestHeader("token") String token){
		this.loginSessionService.validateToken(token);
    	UserDTO userDTO = new UserDTO(this.userService.findByToken(token));
    	return ResponseEntity.ok(userDTO);
    }

    @GetMapping(value = "/listAll", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<UserDTO>> listAll(@RequestHeader("token") String token){
		this.loginSessionService.validateToken(token);
		List<User> users = this.userService.listAll(this.loginSessionService.findUser(token));
    	return ResponseEntity.ok(users.stream().map(u -> u.generateTransportObject(u)).collect(Collectors.toList()));
    }
}
