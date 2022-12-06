package asimo.v.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import asimo.v.entities.Sale;

@Repository
public interface SaleRepository extends JpaRepository<Sale,Long> {
    Optional<Sale> findByProtocol(String protocol);

}
