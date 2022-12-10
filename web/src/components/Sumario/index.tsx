import { useTransacoes } from '../../hooks/useTransacao';
import { Container } from './style';

import entradasImg from '../../assets/income.svg';
import saidasImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

export function Sumario() {
    const { transacoes } = useTransacoes();

    const sumario = transacoes.reduce(
        (acc, transaction) => {
            if (transaction.type === 'deposit') {
                acc.deposito += transaction.ammout;
                acc.total += transaction.ammout;
            } else {
                acc.saidas += transaction.ammout;
                acc.total -= transaction.ammout;
            }

            return acc;
        },
        {
            deposito: 0,
            saidas: 0,
            total: 0,
        }
    );
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={entradasImg} alt="Entradas" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                    }).format(sumario.deposito)}
                </strong>
            </div>

            <div>
                <header>
                    <p>Saidas</p>
                    <img src={saidasImg} alt="Saidas" />
                </header>
                <strong>
                    -
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                    }).format(sumario.saidas)}
                </strong>
            </div>

            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                    }).format(sumario.total)}
                </strong>
            </div>
        </Container>
    );
}
