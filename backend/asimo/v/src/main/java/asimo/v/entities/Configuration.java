package asimo.v.entities;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Configuration {

    @Id
    private String name;

    private Integer value;


    public Integer getValue() {
        return value;
    }

    public void setValue(Integer value) {
        this.value = value;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Configuration(Integer value, String name) {
        this.value = value;
        this.name = name;
    }

    public Configuration() {
    }
}
