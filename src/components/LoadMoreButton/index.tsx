import React, { ButtonHTMLAttributes } from 'react';
import { PokemonTypes } from 'src/@types/pokemon';
import { Button } from './styles';

type LoadMoreButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {}


const LoadMoreButton: React.FC<LoadMoreButtonProps> = (props) => {
  return <Button {...props}>Load More Pokémon</Button>;
}

export default LoadMoreButton;