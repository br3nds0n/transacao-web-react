import Modal from 'react-modal';
import { useState } from 'react';

import { Header } from './components/Header';

import { GlobalStyle } from './styles/global';
import { TrasacaoProvider } from './hooks/useTransacao';
import { Dashboard } from './components/Dashboard';
import { TransacaoModal } from './components/TransacaoModal';

Modal.setAppElement('#root');

function App() {
    const [abrirModalTransacao, setAbrirModalTransacao] = useState(false);

    function handleAbrirModal() {
        setAbrirModalTransacao(true);
    }

    function handlFecharModal() {
        setAbrirModalTransacao(false);
    }

    return (
        <TrasacaoProvider>
            <GlobalStyle />
            <Header onAbrirModal={handleAbrirModal} />
            <Dashboard />
            <TransacaoModal 
                 isOpen={ abrirModalTransacao }
                 onFecharModal={ handlFecharModal }
            />
        </TrasacaoProvider>
    );
}

export default App;
