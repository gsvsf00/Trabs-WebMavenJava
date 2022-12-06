package asimo.v.exceptions;

public class InvalidEmail extends RuntimeException {

	private static final long serialVersionUID = 6531502695746135040L;

	public InvalidEmail(String message, Throwable cause) {
		super(message, cause);
	}

	public InvalidEmail(String message) {
		super(message);
	}

	public InvalidEmail(Throwable cause) {
		super(cause);
	}

}
