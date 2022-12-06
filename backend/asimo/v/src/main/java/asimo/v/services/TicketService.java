package asimo.v.services;

import org.springframework.stereotype.Service;

import asimo.v.entities.Ticket;
import asimo.v.repositories.TicketRepository;

import java.util.List;

@Service
public class TicketService {

    private TicketRepository ticketRepository;

    public TicketService(TicketRepository ticketRepository) {
        this.ticketRepository = ticketRepository;
    }

    public List<Ticket> findAllTicketsBySessionIdentifier(String sessionIdentifier){
        return ticketRepository.findAllBySessionIdentifier(sessionIdentifier);
    }

    public void createTicket(Integer seat, String eventIdentifier, String sessionIdentifier){
        Ticket ticket = new Ticket(seat,eventIdentifier,sessionIdentifier);
        ticketRepository.save(ticket);
    }

    public void generateSessionTicket(Integer numberOfSeats,String eventIdentifier, String sessionIdentifier){
        for(int seat = 1; seat <= numberOfSeats; seat++){
            this.createTicket(seat,eventIdentifier,sessionIdentifier);
        }
    }

    public void seatOcuppeid(String ticketIdentifier) {
        Ticket ticket = ticketRepository.findByTicketIdentifier(ticketIdentifier);

        if(ticket.getOccupied() == false) {
            ticket.setOccupied(true);
        }else{
            ticket.setOccupied(false);
        }
        ticketRepository.save(ticket);
    }
}
