package asimo.v.entities.enums;

public enum TicketType {
    INTEIRA(0),
    MEIA(1);

    private int code;

    TicketType(Integer code){
        this.code = code;
    }

    public Integer getCode(){
        return code;
    }
}
