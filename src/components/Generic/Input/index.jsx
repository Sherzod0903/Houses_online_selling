import React, { forwardRef }  from 'react';


import { Container,Icon,Wrapper } from './style';

export const Input=forwardRef(({type,icon, defaultvalue,name ,placeholder,value ,onChange,width},ref)=>{

    return(
        <Wrapper>
                <Icon>{icon}</Icon>
            <Container 
            ref={ref}
            placeholder={placeholder}
            value={value}
            defaultvalue={defaultvalue}
            name={name} 
            onChange={onChange} 
            width={width} 
            icon={icon}
            type={type}/>
        </Wrapper>
    );
    } 
    
)
export default Input;