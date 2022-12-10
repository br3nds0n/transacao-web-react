package br.com.money.server.controller;

import br.com.money.server.model.Transacao;
import br.com.money.server.service.TransacaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/transactions")
public class TransacaoController {

    @Autowired
    private TransacaoService service;

    @GetMapping
    public List<Transacao> obterTodasTransacoes() {
        return this.service.obterTodasTransacoes();
    }

    @PostMapping
    public ResponseEntity<Transacao> criarCarteira(@RequestBody Transacao transacao) {
        Transacao novaTransacao = this.service.criarTransacao(transacao);
        return new ResponseEntity<>(novaTransacao, HttpStatus.CREATED);
    }
}
