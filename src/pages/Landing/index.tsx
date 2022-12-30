import Card from '@components/Card';
import LoadMoreButton from '@components/LoadMoreButton';
import SearchBar from '@components/SearchBar';
import SidebarLink from '@components/SidebarLink';
import Tag from '@components/Tag';
import TypeTag from '@components/TypeTag';
import React from 'react';

// import { Container } from './styles';

const Landing: React.FC = () => {
  return (
    <>
      <Tag variant="blue">
        pokemon
      </Tag>

      <SearchBar />

      <SidebarLink label="bug" />

      <Card type='grass'/>

      <TypeTag type='grass' />

      <LoadMoreButton />
    </>
    )
    
}

export default Landing;