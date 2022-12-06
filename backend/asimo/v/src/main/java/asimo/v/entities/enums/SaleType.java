package asimo.v.entities.enums;

public enum SaleType {
    PRESENCIAL(0),
    ONLINE(1);

    private Integer code;

    SaleType(Integer code){
        this.code = code;
    }

    public Integer getCode(){
        return code;
    }
}
