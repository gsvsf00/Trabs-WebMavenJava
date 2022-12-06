package asimo.v.entities.operation;

import asimo.v.entities.enums.TicketType;

import javax.validation.constraints.NotNull;

public class TicketOperation {

    @NotNull
    private String ticketIdentifier;

    @NotNull
    private String nameUser;

    @NotNull
    private String sex;

    @NotNull
    private String doc;

    @NotNull
    private Long price;

    @NotNull
    private TicketType type;

    public TicketType getType() {
        return type;
    }

    public void setType(TicketType type) {
        this.type = type;
    }

    public String getTicketIdentifier() {
        return ticketIdentifier;
    }

    public void setTicketIdentifier(String ticketIdentifier) {
        this.ticketIdentifier = ticketIdentifier;
    }

    public String getNameUser() {
        return nameUser;
    }

    public void setNameUser(String nameUser) {
        this.nameUser = nameUser;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public String getDoc() {
        return doc;
    }

    public void setDoc(String doc) {
        this.doc = doc;
    }

    public Long getPrice() {
        return price;
    }

    public void setPrice(Long price) {
        this.price = price;
    }

    public TicketOperation() {
    }

    public TicketOperation(String ticketIdentifier, String nameUser, String sex, String doc, Long price) {
        this.ticketIdentifier = ticketIdentifier;
        this.nameUser = nameUser;
        this.sex = sex;
        this.doc = doc;
        this.price = price;
    }

    public TicketOperation(String ticketIdentifier, String nameUser, String sex, String doc, Long price, TicketType type) {
        this.ticketIdentifier = ticketIdentifier;
        this.nameUser = nameUser;
        this.sex = sex;
        this.doc = doc;
        this.price = price;
        this.type = type;
    }
}
