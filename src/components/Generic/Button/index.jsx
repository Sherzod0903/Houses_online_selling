import React from 'react';
import { Container } from './style';

export const Button=({children,type,height,width, onClick})=>{

    return(
        <Container onClick={onClick} height={height} width={width} type={type}>{children||'Generetic button'}</Container>
    )
        
    
}
export default Button;