package org.divigroup.divigroup.repository;

import org.divigroup.divigroup.model.Cuenta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ICuentaRepository extends JpaRepository<Cuenta, Integer> {
}
