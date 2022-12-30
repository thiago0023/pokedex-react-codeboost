import React, { ButtonHTMLAttributes } from 'react';
import { Button, Icon, Label } from './styles';

type SidebarLinkProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    label: string;
}


const SidebarLink: React.FC<SidebarLinkProps> = ({label, ...rest}) => {
  return (
    <Button {...rest} >
        <Icon>
            <img src={`@assets/icon-types/${label}.svg`} alt="type" />
        </Icon>

        <Label>
            {label}
        </Label>
    </Button>    
);
}

export default SidebarLink;