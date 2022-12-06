package asimo.v.entities.enums;

public enum EventStatus {
    AGENDADO(0),
    EM_ANDAMENTO(1),
    FINALIZADO(2);


    private Integer code;

    EventStatus(Integer code){
        this.code = code;
    }

    public Integer getCode(){
        return code;
    }
}
