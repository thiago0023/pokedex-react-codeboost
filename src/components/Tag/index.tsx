import React from 'react';
import { Container, Icon, Label } from './style';
import iconRed from "@assets/bag-red.svg";

export type TagProps = React.PropsWithChildren<{
    variant: 'red' | 'blue';
}>

const Tag: React.FC<TagProps> = ({children, variant}) => {
  return (
    <Container>
        <Icon variant={variant}>
            <img 
                src={iconRed} 
                alt="Icon" 
            />
        </Icon>

        <Label variant={variant}>
            {children}
        </Label>
    </Container>
    );
}

export default Tag;