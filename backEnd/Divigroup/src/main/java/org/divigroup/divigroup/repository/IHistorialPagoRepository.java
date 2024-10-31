package org.divigroup.divigroup.repository;

import org.divigroup.divigroup.model.HistorialPago;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface IHistorialPagoRepository extends JpaRepository<HistorialPago,Integer> {
}
