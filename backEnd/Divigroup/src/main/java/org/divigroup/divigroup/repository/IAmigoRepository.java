package org.divigroup.divigroup.repository;

import org.divigroup.divigroup.model.Amigo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IAmigoRepository extends JpaRepository<Amigo, Integer> {

}
