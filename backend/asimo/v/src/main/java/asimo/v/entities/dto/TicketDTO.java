package asimo.v.entities.dto;

public class TicketDTO {

    private String ticketIdentifier;

    private Boolean occupiedSeat;

    private Integer seat;

    public TicketDTO() {
    }

    public TicketDTO(String ticketIdentifier, Boolean occupiedSeat, Integer seat) {
        this.ticketIdentifier = ticketIdentifier;
        this.occupiedSeat = occupiedSeat;
        this.seat = seat;
    }

    public Boolean getOccupiedSeat() {
        return occupiedSeat;
    }

    public void setOccupiedSeat(Boolean occupiedSeat) {
        this.occupiedSeat = occupiedSeat;
    }

    public Integer getSeat() {
        return seat;
    }

    public void setSeat(Integer seat) {
        this.seat = seat;
    }

    public String getTicketIdentifier() {
        return ticketIdentifier;
    }

    public void setTicketIdentifier(String ticketIdentifier) {
        this.ticketIdentifier = ticketIdentifier;
    }

    @Override
    public String toString() {
        return "TicketDTO{" +
                "ticketIdentifier='" + ticketIdentifier + '\'' +
                ", occupiedSeat=" + occupiedSeat +
                ", seat=" + seat +
                '}';
    }
}
