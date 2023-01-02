import React from 'react';
import { Container, Content, FooterContainer, Link } from './styles';

// import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
        <Container>
            <Content>
                <h3>PokéBoost</h3>
                <p>Feito com ❤ por Thiago</p>
            </Content>

            <Link href="https://github.com/thiago0023" target="_blank">
                <img src="https://github.com/thiago0023.png" alt="Thiago" />
            </Link>
        </Container>
    </FooterContainer>
    );
}

export default Footer;