/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.gov.rn.parnamirim.agendatelefone.controller;

import br.gov.rn.parnamirim.agendatelefone.modelo.Contato;
import br.gov.rn.parnamirim.agendatelefone.repository.ContatoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author beatriz
 */
@RestController
@RequestMapping("/contatos")
public class ContatoController {

    @Autowired
    private ContatoRepository contatoRepository;

    @CrossOrigin
    @GetMapping
    public ResponseEntity<?> listar() {
        return ResponseEntity.ok(contatoRepository.findAll());
    }
    @CrossOrigin
    @GetMapping("/{id}")
    public ResponseEntity<?>pegarContato(@PathVariable("id") Long id) {
        
        return new ResponseEntity(contatoRepository.findById(id), HttpStatus.OK);
    }
    
    @CrossOrigin
    @PostMapping
    public ResponseEntity<?> salvar(@RequestBody Contato contato) {
        return new ResponseEntity(contatoRepository.save(contato), HttpStatus.CREATED);
    }
    @CrossOrigin
    @DeleteMapping("/{id}")
    public ResponseEntity<?> excluir(@PathVariable("id") Long id) {
        contatoRepository.deleteById(id);
        return new ResponseEntity(HttpStatus.OK);
    }
    @CrossOrigin
    @PutMapping
    public ResponseEntity<?> atualizar(@RequestBody Contato contato) {
        return new ResponseEntity(contatoRepository.save(contato), HttpStatus.OK);
    }

}
