package asimo.v.repositories;

import asimo.v.entities.Configuration;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ConfigurationRepository extends JpaRepository<Configuration,String> {

    Optional<Configuration> findByName(String name);
}
