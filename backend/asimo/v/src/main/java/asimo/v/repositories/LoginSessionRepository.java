package asimo.v.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import asimo.v.entities.LoginSession;

@Repository
public interface LoginSessionRepository extends JpaRepository<LoginSession, Long> {
	Optional<LoginSession> findByUserIdentifierAndLogoutDateNull(String userIdentifier);
	
	Optional<LoginSession> findByToken(String token);
}
