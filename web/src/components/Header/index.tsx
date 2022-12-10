import { Container, Content } from './style';

import logoImg from '../../assets/logo.svg';
import { HeaderProps } from './IHeaderProps';

export function Header({ onAbrirModal }: HeaderProps) {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="Logo" />
                <button type="button" onClick={onAbrirModal}>
                    Nova transação
                </button>
            </Content>
        </Container>
    );
}
