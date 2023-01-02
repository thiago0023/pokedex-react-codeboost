import React from 'react';
import { Container } from './styles';
import { Outlet } from 'react-router-dom';

// import { Container } from './styles';

const MainLayout: React.FC = () => {
  return (
    <Container>
        <Outlet />
    </Container>    
);
}

export default MainLayout;