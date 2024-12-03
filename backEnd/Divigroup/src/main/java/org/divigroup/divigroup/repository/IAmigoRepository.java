package org.divigroup.divigroup.repository;

import org.divigroup.divigroup.model.Amigo;
import org.divigroup.divigroup.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.Modifying;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@Repository
public interface IAmigoRepository extends JpaRepository<Amigo, Integer> {
    /**
     * Lista todos los amigos de un usuario
     * @param usuario El usuario sobre el que queremos hacer la consulta
     * @return La lista de amigos de ese usuario
     */
    @Query("SELECT a " +
            "from Amigo a " +
            "where (a.amigo = :usuario or a.user = :usuario) and a.confirmado = true")
    public List<Amigo> amigos(Usuario usuario);

    /**
     * Lista todos los amigos de un usuario
     * @param usuario El usuario sobre el que queremos hacer la consulta
     * @return La lista de amigos de ese usuario
     */
    @Query("SELECT a " +
            "from Amigo a " +
            "where (a.amigo = :usuario or a.user = :usuario) and a.confirmado = false and (a.amigo = :amigo or a.user = :amigo)")
    List<Amigo> noAmigos(Usuario usuario, Usuario amigo);

    /**
     * Lista todos los amigos de un usuario
     * @param usuario El usuario sobre el que queremos hacer la consulta
     * @return La lista de amigos de ese usuario
     */
    @Query("SELECT a " +
            "from Amigo a " +
            "where (a.amigo = :usuario or a.user = :usuario) and (a.amigo = :amigo or a.user = :amigo)")
    Optional<Amigo> posibleAmigo(Usuario usuario, Usuario amigo);

    /**
     * Actualiza la confirmación de un amigo
     * @param usuario El usuario que envía la confirmación
     * @param amigo El usuario que recibe la confirmación
     */
    @Modifying
    @Query("""
            UPDATE Amigo a
            SET a.confirmado = true
            where (a.amigo = :usuario or a.user = :usuario) and a.confirmado = false and (a.amigo = :amigo or a.user = :amigo)
            """)
    void actualizarConfirmacion(Usuario usuario, Usuario amigo);

    // @Query(value = """
    //         select *
    //         from divigroup.usuario
    //         where id in (SELECT CASE WHEN a.usuario1 = :idUsuario THEN a.usuario2 ELSE a.usuario1 END as amigo
    //                      FROM divigroup.amigo a
    //                      WHERE a.usuario2 = :idUsuario
    //                         OR a.usuario1 = :idUsuario
    //         )
    //         """, nativeQuery = true)
    // public List<Usuario> pruebas(int idUsuario);
}
