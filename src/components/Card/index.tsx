import React from 'react';
import { PokemonTypes } from 'src/@types/pokemon';

import { Container, Icon, Image, Info, Text } from './styles';

interface CardProps {
    type: PokemonTypes;
}

const Card: React.FC<CardProps> = ({type}) => {
  return (
    <Container>
        <Image type={type}>
            <img src="src/assets/bulbasaur.svg" alt="" />
        </Image>

        <Info>
            <Text>
                <span>#001</span>
                <h3>Bulbasaur</h3>
            </Text>

            <Icon>
                <img src={`src/assets/icon-types/${type}.svg`} alt="" />
            </Icon>
        </Info>
    </Container>
    );
}

export default Card;