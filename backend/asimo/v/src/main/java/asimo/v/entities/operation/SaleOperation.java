package asimo.v.entities.operation;

import java.util.Date;
import java.util.List;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import asimo.v.entities.enums.DocType;
import asimo.v.entities.enums.SaleType;

public class SaleOperation {

    private String userIdentifier;

    @NotNull
    @Pattern(regexp = "(^\\d{3}\\x2E\\d{3}\\x2E\\d{3}\\x2D\\d{2}$)|(^\\d{1,2}).?(\\d{3}).?(\\d{3})-?(\\d{1}|X|x$)\r\n", message = "formato inválido.")
    private String doc;

    @NotNull
    private String sex;

    @NotNull
    private Float price;

    @NotNull
    private Integer seat;

    @NotNull
    private Date saleDate;

    @NotNull
    private String paymentForm;

    @NotNull
    private SaleType saleType;

    @NotNull
    private String userName;

    @NotNull
    private DocType docType;

    List<TicketOperation> ticketOperationList;

    public String getDoc() {
        return doc;
    }

    public void setDoc(String doc) {
        this.doc = doc;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
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

    public List<TicketOperation> getTicketOperationList() {
        return ticketOperationList;
    }

    public void setTicketOperationList(List<TicketOperation> ticketOperationList) {
        this.ticketOperationList = ticketOperationList;
    }

    public String getUserIdentifier() {
        return userIdentifier;
    }

    public void setUserIdentifier(String userIdentifier) {
        this.userIdentifier = userIdentifier;
    }

    public SaleOperation() {
    }

    public SaleOperation(String doc, String sex, Float price, Integer seat, Date saleDate, String paymentForm, SaleType saleType, String userName, DocType docType) {
        this.doc = doc;
        this.sex = sex;
        this.price = price;
        this.saleDate = saleDate;
        this.paymentForm = paymentForm;
        this.saleType = saleType;
        this.userName = userName;
        this.docType = docType;
    }

    public SaleOperation(String doc, String sex, Float price, Integer seat, Date saleDate, String paymentForm, SaleType saleType, String userName, DocType docType, List<TicketOperation> ticketOperationList) {
        this.doc = doc;
        this.sex = sex;
        this.price = price;
        this.saleDate = saleDate;
        this.paymentForm = paymentForm;
        this.saleType = saleType;
        this.userName = userName;
        this.docType = docType;
        this.ticketOperationList = ticketOperationList;
    }

    public SaleOperation(String userIdentifier, String doc, String sex, Float price, Integer seat, Date saleDate, String paymentForm, SaleType saleType, String userName, DocType docType, List<TicketOperation> ticketOperationList) {
        this.userIdentifier = userIdentifier;
        this.doc = doc;
        this.sex = sex;
        this.price = price;
        this.saleDate = saleDate;
        this.paymentForm = paymentForm;
        this.saleType = saleType;
        this.userName = userName;
        this.docType = docType;
        this.ticketOperationList = ticketOperationList;
    }
}
