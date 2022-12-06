package asimo.v.entities.enums;

public enum DocType {
    RG(0),
    CPF(1);

    private Integer code;

    DocType(Integer code){
        this.code = code;
    }

	public Integer getCode() {
		return code;
	}
}
