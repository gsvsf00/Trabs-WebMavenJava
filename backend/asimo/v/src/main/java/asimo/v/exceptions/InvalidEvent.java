package asimo.v.exceptions;

public class InvalidEvent extends RuntimeException {
    private static final long serialVersionUID = -2051173636071394791L;

    public InvalidEvent() {
    }

    public InvalidEvent(String message) {
        super(message);
    }

    public InvalidEvent(Throwable cause) {
        super(cause);
    }

    public InvalidEvent(String message, Throwable cause) {
        super(message, cause);
    }

    public InvalidEvent(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
