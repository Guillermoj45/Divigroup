package org.divigroup.divigroup.repository;

import jakarta.persistence.criteria.CriteriaBuilder;
import org.divigroup.divigroup.model.Cuenta;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICuentaRepository extends JpaRepository<Cuenta, Integer> {
}
