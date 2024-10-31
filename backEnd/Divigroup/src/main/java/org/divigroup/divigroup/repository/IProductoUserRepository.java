package org.divigroup.divigroup.repository;

import jakarta.persistence.criteria.CriteriaBuilder;
import org.divigroup.divigroup.model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IProductoUserRepository extends JpaRepository<Producto, Integer> {
}
