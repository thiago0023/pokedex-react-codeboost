import SearchBar from '@components/SearchBar';
import SidebarLink from '@components/SidebarLink';
import Tag from '@components/Tag';
import React from 'react';

// import { Container } from './styles';

const Landing: React.FC = () => {
  return (
    <>
      <Tag variant="blue">
        pokemon
      </Tag>

      <SearchBar />

      <SidebarLink label="normal" />
    </>
    )
    
}

export default Landing;