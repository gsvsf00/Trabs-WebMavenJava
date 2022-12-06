package asimo.v.entities;

import java.util.Date;
import java.util.List;
import java.util.UUID;

import javax.persistence.*;

import asimo.v.entities.dto.SaleDTO;
import asimo.v.entities.dto.SaleTicketDTO;
import asimo.v.entities.enums.DocType;
import asimo.v.entities.enums.SaleType;
import asimo.v.entities.operation.SaleOperation;
import org.springframework.format.annotation.NumberFormat;

@Entity
@Table(name = "venda")
public class Sale{

    @Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

	@Column(name="saleidentifier")
	private String saleIdentifier;

    @Column(name = "nrprotocolo")
    private String protocol;

    @Column(name="nrvalorvenda")
    private Float price;

    @Column(name = "dtvenda")
    private Date saleDate;

    private String useridentifier;

    @Column(name = "formadepagamento")
    private String paymentForm;

    @Column(name = "tipovenda")
    private SaleType saleType;

    @Column(name="nomecliente")
    private String userName;

    @Column(name = "tipodedocumento")
    private DocType docType;

    @Column(name = "nrdocumento")
    private String doc;

	public SaleDTO generateSaleDTO(List<SaleTicketDTO> tickets, String eventName, Date sessionStartDate) {
		return new SaleDTO(this.protocol,this.doc,this.price,eventName, this.userName,this.saleDate,sessionStartDate,tickets);
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String generateProtocol(Integer value){
		return value.toString();
	}

	public String getProtocol() {
		return protocol;
	}

	public void setProtocol(String protocol) {
		this.protocol = protocol;
	}

	public Float getPrice() {
		return price;
	}

	public void setPrice(Float price) {
		this.price = price;
	}

	public Date getSaleDate() {
		return saleDate;
	}

	public void setSaleDate(Date saleDate) {
		this.saleDate = saleDate;
	}

	public String getSaleIdentifier() {
		return saleIdentifier;
	}

	public void setSaleIdentifier(String saleIdentifier) {
		this.saleIdentifier = saleIdentifier;
	}

	public String getUseridentifier() {
		return useridentifier;
	}

	public void setUseridentifier(String useridentifier) {
		this.useridentifier = useridentifier;
	}

	public String getPaymentForm() {
		return paymentForm;
	}

	public void setPaymentForm(String paymentForm) {
		this.paymentForm = paymentForm;
	}

	public SaleType getSaleType() {
		return saleType;
	}

	public void setSaleType(SaleType saleType) {
		this.saleType = saleType;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public DocType getDocType() {
		return docType;
	}

	public void setDocType(DocType docType) {
		this.docType = docType;
	}

	public String getDoc() {
		return doc;
	}

	public void setDoc(String doc) {
		this.doc = doc;
	}

	public Sale() {
	}

	public Sale(Float price, Date saleDate, String useridentifier, String paymentForm, SaleType saleType, String userName, DocType docType, String doc) {
		this.setSaleIdentifier(UUID.randomUUID().toString());
		this.price = price;
		this.saleDate = saleDate;
		this.useridentifier = useridentifier;
		this.paymentForm = paymentForm;
		this.saleType = saleType;
		this.userName = userName;
		this.docType = docType;
		this.doc = doc;
	}

	public Sale(SaleOperation saleOperation) {
		this.setSaleIdentifier(UUID.randomUUID().toString());
		this.price = saleOperation.getPrice();
		this.saleDate = saleOperation.getSaleDate();
		this.useridentifier = saleOperation.getUserIdentifier();
		this.paymentForm = saleOperation.getPaymentForm();
		this.saleType = saleOperation.getSaleType();
		this.userName = saleOperation.getUserName();
		this.docType = saleOperation.getDocType();
		this.doc = saleOperation.getDoc();
	}

}
