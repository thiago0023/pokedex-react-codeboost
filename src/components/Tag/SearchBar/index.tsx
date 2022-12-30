import React from 'react';

import { Button, Container, Input } from './styles';

const SearchBar: React.FC = () => {
  return (
    <Container>
        <Input type="text" placeholder='Search name or code'/>

        <Button>
            <img src="" alt="" />
        </Button>
    </Container>
    );
}

export default SearchBar;