package asimo.v.entities.enums;

public enum MovieType {
    DUBLADO(0),
    LEGENDADO(1);

    private Integer code;

    MovieType(Integer code){
        this.code = code;
    }

    public Integer getCode(){
        return code;
    }
}
