package asimo.v.entities.objects;

import javax.validation.constraints.NotNull;

import asimo.v.entities.enums.TicketType;

public class TicketObject {

    private String seat;

    @NotNull
    private TicketType ticketType;

    private Long price;

    @NotNull
    private String sessionIdentifier;

    @NotNull
    private String eventIdentifier;

    private String saleidentifier;

    private String useridentifier;

    @NotNull
    private Boolean occupied;
}
