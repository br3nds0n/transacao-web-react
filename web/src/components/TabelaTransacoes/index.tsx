import { Container } from './style';
import { useTransacoes } from '../../hooks/useTransacao';

export function TabelaTransacoes() {
    const { transacoes } = useTransacoes();

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th> Título </th>
                        <th> Valor </th>
                        <th> Categoria </th>
                        <th> Data </th>
                    </tr>
                </thead>
                <tbody>
                    {transacoes.map((transacao) => (
                        <tr key={transacao.id}>
                            <td>{transacao.title}</td>
                            <td className={transacao.type}>
                                {new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL',
                                }).format(transacao.ammout)}
                            </td>
                            <td>{transacao.category}</td>
                            <td>
                                {new Intl.DateTimeFormat('pt-BR').format(
                                    new Date(transacao.createdAt)
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    );
}
