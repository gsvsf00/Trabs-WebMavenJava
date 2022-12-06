package asimo.v.exceptions;

public class InvalidLogin extends RuntimeException {

	private static final long serialVersionUID = -2051173636071394791L;

	public InvalidLogin() {
	}

	public InvalidLogin(String message) {
		super(message);
	}

	public InvalidLogin(Throwable cause) {
		super(cause);
	}

	public InvalidLogin(String message, Throwable cause) {
		super(message, cause);
	}

	public InvalidLogin(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
	}

}
