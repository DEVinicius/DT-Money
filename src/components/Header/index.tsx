import { useState } from 'react';
import logoImg from '../../assets/logo.svg';
import Modal from 'react-modal';
import { Container, Content } from './style';

interface HeaderProps {
    handleOpenModal: () => void;
}

export function Header({
    handleOpenModal
}:HeaderProps) {

    return(
        <Container>
            <Content>
                <img src={logoImg} alt="dt-money"/>
                <button onClick={handleOpenModal}>
                    Nova transação
                </button>
            </Content>

            
        </Container>
    )
}