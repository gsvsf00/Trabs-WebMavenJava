package asimo.v.entities.dto;

import java.util.Date;
import java.util.List;

public class SaleDTO {
    private String protocol;
    
    private String doc;
    
    private Float price;
    
    private String eventName;
    
    private String userName;
    
    private Date saleDate;
    
    private Date sessionDate;

    List<SaleTicketDTO> saleTicketDTOList;

    public String getProtocol() {
        return protocol;
    }

    public void setProtocol(String protocol) {
        this.protocol = protocol;
    }

    public String getDoc() {
        return doc;
    }

    public void setDoc(String doc) {
        this.doc = doc;
    }

    public Float getPrice() {
        return price;
    }

    public void setPrice(Float price) {
        this.price = price;
    }

    public String getEventName() {
        return eventName;
    }

    public void setEventName(String eventName) {
        this.eventName = eventName;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public Date getSaleDate() {
        return saleDate;
    }

    public void setSaleDate(Date saleDate) {
        this.saleDate = saleDate;
    }

    public Date getSessionDate() {
        return sessionDate;
    }

    public void setSessionDate(Date sessionDate) {
        this.sessionDate = sessionDate;
    }


    public List<SaleTicketDTO> getSaleTicketDTOList() {
        return saleTicketDTOList;
    }

    public void setSaleTicketDTOList(List<SaleTicketDTO> saleTicketDTOList) {
        this.saleTicketDTOList = saleTicketDTOList;
    }

    public SaleDTO() {
    }


    public SaleDTO(String protocol, String doc, Float price, String eventName, String userName, Date saleDate, Date sessionDate, List<SaleTicketDTO> saleTicketDTOList) {
        this.protocol = protocol;
        this.doc = doc;
        this.price = price;
        this.eventName = eventName;
        this.userName = userName;
        this.saleDate = saleDate;
        this.sessionDate = sessionDate;
        this.saleTicketDTOList = saleTicketDTOList;
    }
}
