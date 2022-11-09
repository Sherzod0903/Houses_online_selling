import React from 'react';
import { Container } from './style';

export const Input=({type, defaultvalue,name ,placeholder,value ,onChange,width})=>{

    return(
        <Container 
        placeholder={placeholder}
        value={value}
        defaultvalue={defaultvalue}
        name={name} 
        onChange={onChange} 
        width={width} 
        type={type}/>
    )
        
    
}
export default Input;