package asimo.v.entities;

import java.time.Duration;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.temporal.ChronoUnit;
import java.util.Date;
import java.util.UUID;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "loginsession")
public class LoginSession {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name = "id", unique = true)
    private Long id;

	@Column(name = "useridentifier")
    private String userIdentifier;

	@Column(nullable = false)
	private String token;

    @Column(name = "logindate",nullable = false)
    private Date loginDate;
    
    @Column(name = "expirationdate",nullable = false)
    private Date expirationDate;

    @Column(name = "logoutdate")
    private Date logoutDate;

	public LoginSession(User user) {
		this.userIdentifier = user.getUserIdentifier();
		this.token = UUID.randomUUID().toString();
		this.loginDate = new Date();
		this.expirationDate = Date.from(LocalDateTime.now().plus(Duration.of(10, ChronoUnit.MINUTES)).atZone(ZoneId.systemDefault()).toInstant());
	}

    public LoginSession() {
    }

    public String getToken() {
		return token;
	}

	public String getUserIdentifier() {
		return userIdentifier;
	}


	public void finish() {
		this.logoutDate = new Date();
	}
	public Date getLogoutDate() {
		return logoutDate;
	}

	public Date getExpirationDate() {
		return expirationDate;
	}

	public void setExpirationDate(Date expirationDate) {
		this.expirationDate = expirationDate;
	}
}
