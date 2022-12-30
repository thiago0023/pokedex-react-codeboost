import React, { ButtonHTMLAttributes } from 'react';
import { PokemonTypes } from 'src/@types/pokemon';
import { Button, Icon, Label } from './styles';

type SidebarLinkProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    label: PokemonTypes;
}


const SidebarLink: React.FC<SidebarLinkProps> = ({label, ...rest}) => {
  return (
    <Button {...rest} >
        <Icon>
            <img src={`src/assets/icon-types/${label}.svg`} alt="type" />
        </Icon>

        <Label type={label}>
            {label.charAt(0).toUpperCase() + label.slice(1)}
        </Label>
    </Button>    
);
}

export default SidebarLink;