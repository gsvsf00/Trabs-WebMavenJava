package asimo.v.entities;

import java.util.Date;
import java.util.UUID;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import asimo.v.entities.dto.SaleTicketDTO;
import asimo.v.entities.dto.TicketDTO;
import asimo.v.entities.enums.TicketType;

@Entity
@Table(name = "ingresso")
public class Ticket{


    @Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

	@Column(name="ticketidentifier")
	private String ticketIdentifier;

    private Integer seat;

	@Column(name="type")
    private TicketType ticketType;

    private Long price;

	@Column(name = "sessionidentifier",nullable = false)
    private String sessionIdentifier;

	@Column(name="eventidentifier",nullable = false)
	private String eventIdentifier;

    @Column(name = "saleidentifier")
    private String saleidentifier;

	@Column(name="useridentifier")
	private String useridentifier;

	@Column(name = "occupiedseat",nullable = false)
	private Boolean occupiedSeat;

	@Column(name = "saledate")
	private Date saleDate;

	@Column(name = "enddate")
	private Date endDate;

	private String nameUser;

	private String sex;

	private String doc;

	private String protocol;

	public TicketDTO generateTicketDTO(){
		return new TicketDTO(this.ticketIdentifier,this.occupiedSeat,this.seat);
	}

	public SaleTicketDTO generateSaleTicketDTO(){
		return new SaleTicketDTO(this.nameUser,this.seat,this.price,this.doc);
	}

	public String getTicketIdentifier() {
		return ticketIdentifier;
	}

	public void setTicketIdentifier(String ticketIdentifier) {
		this.ticketIdentifier = ticketIdentifier;
	}

	public Integer getSeat() {
		return seat;
	}

	public void setSeat(Integer seat) {
		this.seat = seat;
	}

	public TicketType getTicketType() {
		return ticketType;
	}

	public void setTicketType(TicketType ticketType) {
		this.ticketType = ticketType;
	}

	public Long getPrice() {
		return price;
	}

	public void setPrice(Long price) {
		this.price = price;
	}

	public String getSessionIdentifier() {
		return sessionIdentifier;
	}

	public void setSessionIdentifier(String sessionIdentifier) {
		this.sessionIdentifier = sessionIdentifier;
	}

	public String getEventIdentifier() {
		return eventIdentifier;
	}

	public void setEventIdentifier(String eventIdentifier) {
		this.eventIdentifier = eventIdentifier;
	}

	public String getSaleidentifier() {
		return saleidentifier;
	}

	public void setSaleidentifier(String saleidentifier) {
		this.saleidentifier = saleidentifier;
	}

	public String getUseridentifier() {
		return useridentifier;
	}

	public void setUseridentifier(String useridentifier) {
		this.useridentifier = useridentifier;
	}

	public Boolean getOccupied() {
		return occupiedSeat;
	}

	public void setOccupied(Boolean occupiedSeat) {
		this.occupiedSeat = occupiedSeat;
	}

	public Boolean getOccupiedSeat() {
		return occupiedSeat;
	}

	public void setOccupiedSeat(Boolean occupiedSeat) {
		this.occupiedSeat = occupiedSeat;
	}

	public Date getSaleDate() {
		return saleDate;
	}

	public void setSaleDate(Date saleDate) {
		this.saleDate = saleDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
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

	public String getProtocol() {
		return protocol;
	}

	public void setProtocol(String protocol) {
		this.protocol = protocol;
	}

	public String generateProtocol(Integer value){
		return String.format("%05d",value.toString());
	}

	public Ticket() {
	}

	public Ticket(Integer seat, TicketType ticketType, Long price, String sessionIdentifier, String eventIdentifier, String saleidentifier, String useridentifier, Boolean occupiedSeat, Date saleDate, Date endDate) {
		this.setTicketIdentifier(UUID.randomUUID().toString());
		this.seat = seat;
		this.ticketType = ticketType;
		this.price = price;
		this.sessionIdentifier = sessionIdentifier;
		this.eventIdentifier = eventIdentifier;
		this.saleidentifier = saleidentifier;
		this.useridentifier = useridentifier;
		this.occupiedSeat = occupiedSeat;
		this.saleDate  = saleDate;
		this.endDate = endDate;
	}

	public Ticket(Integer seat, String eventIdentifier, String sessionIdentifier){
		this.setSeat(seat);
		this.setTicketIdentifier(UUID.randomUUID().toString());
		this.setEventIdentifier(eventIdentifier);
		this.setSessionIdentifier(sessionIdentifier);
		this.setOccupied(false);
	}

	public Ticket(Integer seat, TicketType ticketType, Long price, String sessionIdentifier, String eventIdentifier, String saleidentifier, String useridentifier, Boolean occupiedSeat, Date saleDate, Date endDate, String nameUser, String sex, String doc,String protocol) {
		this.setTicketIdentifier(UUID.randomUUID().toString());
		this.seat = seat;
		this.ticketType = ticketType;
		this.price = price;
		this.sessionIdentifier = sessionIdentifier;
		this.eventIdentifier = eventIdentifier;
		this.saleidentifier = saleidentifier;
		this.useridentifier = useridentifier;
		this.occupiedSeat = occupiedSeat;
		this.saleDate = saleDate;
		this.endDate = endDate;
		this.nameUser = nameUser;
		this.sex = sex;
		this.doc = doc;
		this.protocol = protocol;
	}
}
