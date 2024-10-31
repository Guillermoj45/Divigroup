package org.divigroup.divigroup.repository;

import org.divigroup.divigroup.model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IProductoUsuarioRepository extends JpaRepository<Producto, Integer> {
}
