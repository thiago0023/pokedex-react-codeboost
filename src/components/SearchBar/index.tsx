import React from 'react';

import { Button, Container, Input } from './styles';
import iconSearch from '../../assets/icon-search.svg';

const SearchBar: React.FC = () => {
  return (
    <Container>
        <Input type="text" placeholder='Search name or code'/>

        <Button>
            <img src={iconSearch} alt="" />
        </Button>
    </Container>
    );
}

export default SearchBar;