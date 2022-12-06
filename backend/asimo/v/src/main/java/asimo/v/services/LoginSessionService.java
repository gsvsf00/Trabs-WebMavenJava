package asimo.v.services;

import java.util.Date;
import java.util.Optional;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import asimo.v.entities.LoginSession;
import asimo.v.entities.User;
import asimo.v.repositories.LoginSessionRepository;

@Service
public class LoginSessionService {

	private LoginSessionRepository loginSessionRepository;
	
	private UserService userService;

	public LoginSessionService(@Lazy LoginSessionRepository loginSessionRepository, UserService userService){
		this.loginSessionRepository = loginSessionRepository;
		this.userService = userService;
	}

	public void validateToken(String token) {
		LoginSession session = this.findSessionByToken(token);
		Date expirationDate = session.getExpirationDate();
		if (new Date().after(expirationDate)) {
			throw new RuntimeException("Sessão expirou.");
		}
	}
	
	public String generateSession(User userS) {
		Optional<LoginSession> session = loginSessionRepository.findByUserIdentifierAndLogoutDateNull(userS.getUserIdentifier());
		if (session.isPresent()) {
			session.get().finish();
		}
		
		LoginSession userSession = new LoginSession(userS);
		loginSessionRepository.save(userSession);
		
		return userSession.getToken();
	}
	
	public LoginSession findSessionByToken(String token) {
		Optional<LoginSession> session = loginSessionRepository.findByToken(token);
		if (session.isPresent()) {
			return session.get();
		}else {
			throw new RuntimeException("não existe essa sessão");
		}
	}
	
	public User findUser(String token) {
		LoginSession session = this.findSessionByToken(token);
		User user = userService.findByIdentifier(session.getUserIdentifier());
		return user;
	}
	
	public LoginSession logout(String token) {
		LoginSession session = this.findSessionByToken(token);
		session.finish();
		
		loginSessionRepository.save(session);
		
		return session;
	}
}
