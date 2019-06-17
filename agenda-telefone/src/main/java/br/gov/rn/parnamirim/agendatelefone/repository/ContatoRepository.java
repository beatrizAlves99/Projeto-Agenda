/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.gov.rn.parnamirim.agendatelefone.repository;

import br.gov.rn.parnamirim.agendatelefone.modelo.Contato;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author beatriz
 */
@Repository
public interface ContatoRepository extends JpaRepository<Contato, Long>{
    
}
