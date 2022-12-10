import { Container } from './style';
import { Sumario } from '../Sumario';
import { TabelaTransacoes } from '../TabelaTransacoes';

export function Dashboard() {
    return (
        <Container>
            <Sumario />
            <TabelaTransacoes />
        </Container>
    );
}
