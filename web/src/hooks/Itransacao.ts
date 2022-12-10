import { ReactNode } from 'react';

export interface Transacao {
    id: number;
    title: string;
    ammout: number;
    category: string;
    createdAt: string;
    type: string;
}

export interface TransacaoProviderProps {
    children: ReactNode;
}

export type TransacaoInput = Omit<Transacao, 'id' | 'createdAt'>;

export interface TransacaoContextData {
    transacoes: Transacao[];
    criarTransacao: (transacao: TransacaoInput) => Promise<void>;
}
