package asimo.v.entities.dto;

public class SaleTicketDTO {

    private String userName;

    private Integer seat;

    private Long price;

    private String doc;

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public Integer getSeat() {
        return seat;
    }

    public void setSeat(Integer seat) {
        this.seat = seat;
    }

    public Long getPrice() {
        return price;
    }

    public void setPrice(Long price) {
        this.price = price;
    }

    public String getDoc() {
        return doc;
    }

    public void setDoc(String doc) {
        this.doc = doc;
    }

    public SaleTicketDTO() {
    }

    public SaleTicketDTO(String userName, Integer seat, Long price, String doc) {
        this.userName = userName;
        this.seat = seat;
        this.price = price;
        this.doc = doc;
    }
}
