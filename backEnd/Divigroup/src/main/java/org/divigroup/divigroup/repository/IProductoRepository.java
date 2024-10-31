package org.divigroup.divigroup.repository;

import org.divigroup.divigroup.model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IProductoRepository extends JpaRepository<Producto, Integer> {
}
