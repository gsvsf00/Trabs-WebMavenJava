package asimo.v.exceptions;

public class UserNotFound extends RuntimeException {

	private static final long serialVersionUID = -285004475679602743L;

	public UserNotFound() {
		super();
	}

	public UserNotFound(String message, Throwable cause) {
		super(message, cause);
	}

	public UserNotFound(String message) {
		super(message);
	}
}
