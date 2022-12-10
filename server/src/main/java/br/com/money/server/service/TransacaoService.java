package br.com.money.server.service;

import br.com.money.server.model.Transacao;
import br.com.money.server.repository.TransacaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class TransacaoService {

    @Autowired
    private TransacaoRepository repository;

    public List<Transacao> obterTodasTransacoes() {
        return this.repository.findAll();
    }

    public Transacao criarTransacao(Transacao novaTransacao) {
        novaTransacao.setCreatedAt(LocalDateTime.now());
        return this.repository.save(novaTransacao);
    }
}
