package asimo.v.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import asimo.v.entities.Ticket;

@Repository
public interface TicketRepository  extends JpaRepository<Ticket,Long> {

    List<Ticket> findAllBySessionIdentifier(String sessionIdentifier);

    Ticket findTicketBySessionIdentifier(String sessionIdentifier);

    Ticket findByTicketIdentifier(String ticketIdentifier);

}
