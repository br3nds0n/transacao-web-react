import Modal from 'react-modal';
import { FormEvent, useState } from 'react';

import fecharImg from '../../assets/close.svg';
import entradaImg from '../../assets/income.svg';
import saidaImg from '../../assets/outcome.svg';
import { useTransacoes } from '../../hooks/useTransacao';

import { Container, TransactionalTypeContainer, RadioBox } from './style';
import { ITransacaoProps } from './ITransacaoProps';

export function TransacaoModal({ isOpen, onFecharModal }: ITransacaoProps) {
    const { criarTransacao } = useTransacoes();

    const [title, setTitle] = useState('');
    const [ammout, setAmmout] = useState(0);
    const [category, setCateogy] = useState('');

    const [type, setType] = useState('deposit');

    async function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();

        await criarTransacao({
            title,
            ammout,
            category,
            type,
        });

        setTitle('');
        setAmmout(0);
        setCateogy('');
        setType('deposit');

        onFecharModal();
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onFecharModal}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button
                type="button"
                onClick={onFecharModal}
                className="react-modal-close"
            >
                <img src={fecharImg} alt="Fechar modal" />
            </button>

            <Container onSubmit={handleCreateNewTransaction}>
                <h2>cadastrar transação</h2>

                <input
                    placeholder="Título"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />

                <input
                    type="number"
                    placeholder="Valor"
                    value={ammout}
                    onChange={(event) => setAmmout(Number(event.target.value))}
                />

                <TransactionalTypeContainer>
                    <RadioBox
                        type="button"
                        onClick={() => setType('deposit')}
                        isActive={type === 'deposit'}
                        activeColor="green"
                    >
                        <img src={entradaImg} alt="" />
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox
                        type="button"
                        onClick={() => setType('withdraw')}
                        isActive={type === 'withdraw'}
                        activeColor="red"
                    >
                        <img src={saidaImg} alt="" />
                        <span>Saida</span>
                    </RadioBox>
                </TransactionalTypeContainer>

                <input
                    placeholder="Categoria"
                    value={category}
                    onChange={(event) => setCateogy(event.target.value)}
                />

                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    );
}
