package org.divigroup.divigroup.repository;

import org.divigroup.divigroup.model.Chat;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IChatRepository extends JpaRepository<Chat, Integer> {
}
