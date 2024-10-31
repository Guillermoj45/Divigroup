package org.divigroup.divigroup.repository;

import org.divigroup.divigroup.model.UsuarioCuenta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IUsuarioCuenta extends JpaRepository<UsuarioCuenta, Integer> {
}
