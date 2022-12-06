package asimo.v.services;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.SecureRandom;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

import javax.xml.bind.DatatypeConverter;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import asimo.v.entities.LoginSession;
import asimo.v.entities.User;
import asimo.v.entities.objects.UserObject;
import asimo.v.entities.operation.UserOperation;
import asimo.v.exceptions.InvalidEmail;
import asimo.v.exceptions.InvalidPasswordException;
import asimo.v.exceptions.UserNotFound;
import asimo.v.repositories.UserRepository;

@Service
public class UserService {

    private UserRepository userRepository;
    
    private LoginSessionService loginSessionService;
     
    public UserService(UserRepository userRepository, @Lazy LoginSessionService loginSessionService) {
		this.userRepository = userRepository;
		this.loginSessionService = loginSessionService;
	}

    public void save(User user){
        userRepository.save(user);
    }

	public String login(User userS) {
 		User currentUser = validateLogin(userS);
 		return loginSessionService.generateSession(currentUser);
	}

	public LoginSession logout(String token) {
		try {
			LoginSession session = loginSessionService.logout(token);
			return session;
		} catch (Exception e) {
			throw new RuntimeException(e.getMessage());
		}
	}

	public User create(UserObject userParams) {
		validateCreationUser(userParams);

		User newUser = new User(userParams);
		newUser.generatePassword(userParams.getPassword());
		this.save(newUser);

		return newUser;
	}

	public User createAdmin(User userParams) {
		validateCreationUserAdmin(userParams);

		User newUser = new User(userParams);
		newUser.generatePassword(userParams.getPassword());
		this.save(newUser);

		return newUser;
	}

	private User validateLogin(User userS) {
		Optional<User> userL = userRepository.findByEmail(userS.getEmail());
		if (!userL.isPresent()) {
			throw new UserNotFound("Usuário não foi encontrado.");
		}
		User currentUser = userL.get();
		String passwordVerify = encryptPassword(userS.getPassword(), currentUser.getSalt());
		
		if (!passwordVerify.equals(currentUser.getPassword())) {
			throw new InvalidPasswordException("Senha inválida.");
		}

		return currentUser;
	}
	
	private void validateCreationUser(UserObject userParams) {
		if (userRepository.findByEmail(userParams.getEmail()).isPresent()) {
			throw new InvalidEmail("Email Inválido");
		}
	}

	private void validateCreationUserAdmin(User userParams) {
		if (userRepository.findByEmail(userParams.getEmail()).isPresent()) {
			throw new InvalidEmail("Email Inválido");
		}
	}

	public static String generateSalt() {
		SecureRandom random = new SecureRandom();
		byte[] salt = new byte[32];
		random.nextBytes(salt);
		
		return DatatypeConverter.printHexBinary(salt).toUpperCase();
	}

	public static String encryptPassword(String password, String salt) {
		try {
			MessageDigest md = MessageDigest.getInstance("SHA-256");
			md.update(salt.getBytes(StandardCharsets.UTF_8));
			
			byte[] bytePassword = md.digest(password.getBytes());
			
			return DatatypeConverter.printHexBinary(bytePassword).toUpperCase();
		} catch (Exception e) {
			throw new RuntimeException("não deu certo");
		}
	}

	public User findByToken(String token) {
		User user = this.loginSessionService.findUser(token);
		return user;
	}
	
	public User findById(Long id) {
		Optional<User> user = this.userRepository.findById(id);
		if (user.isPresent()) {
			return user.get();
		}
		throw new RuntimeException("User não encontrado");
	}
	public User findByIdentifier(String identifier) {
		Optional<User> user = this.userRepository.findByUserIdentifier(identifier);
		if (user.isPresent()) {
			return user.get();
		}
		throw new RuntimeException("User não encontrado");
	}

	public List<User> listAll(User user){
		user.isAdmin();
		return this.userRepository.findAll();
	}
	
	public User editUser(UserOperation userEdit, User user) {
		user.editUser(userEdit);


		if (!Objects.equals(userEdit.getPassword(),null)) {
			user.setPassword(encryptPassword(userEdit.getPassword(), user.getSalt()));
		}
		if (!Objects.equals(userEdit.getEmail(),null)) {
			if (userRepository.findByEmail(userEdit.getEmail()).isPresent()) {
				throw new InvalidEmail("Email Inválido");
			}
			user.setEmail(userEdit.getEmail());
		}
		
		this.save(user);
		
		return user;
	}
}