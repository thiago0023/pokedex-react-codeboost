import React from 'react';
import { PokemonTypes } from 'src/@types/pokemon';
import { Tag } from './styles';

// import { Container } from './styles';

const TypeTag: React.FC<{type: PokemonTypes}> = ({type}) => {
  // first letter uppercase
const typeUppercase = type.charAt(0).toUpperCase() + type.slice(1);
  return <Tag type={type}>{typeUppercase}</Tag>;
}

export default TypeTag;