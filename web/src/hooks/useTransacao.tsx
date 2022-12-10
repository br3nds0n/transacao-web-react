import { createContext, useContext, useEffect, useState } from 'react';

import { api } from '../service/api';
import {
    TransacaoContextData,
    Transacao,
    TransacaoInput,
    TransacaoProviderProps,
} from './Itransacao';

const TransacoesContext = createContext<TransacaoContextData>(
    {} as TransacaoContextData
);

export function TrasacaoProvider({ children }: TransacaoProviderProps) {
    const [transacoes, setTransaction] = useState<Transacao[]>([]);

    useEffect(() => {
        api.get('/transactions').then((response) =>
            setTransaction(response.data)
        );
    }, []);

    async function criarTransacao(transactionInput: TransacaoInput) {
        const response = await api.post('/transactions', transactionInput);
        const transaction = response.data;

        setTransaction([...transacoes, transaction]);
    }

    return (
        <TransacoesContext.Provider value={{ transacoes, criarTransacao }}>
            {children}
        </TransacoesContext.Provider>
    );
}

export function useTransacoes() {
    const contex = useContext(TransacoesContext);
    return contex;
}
