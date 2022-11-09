import styled from "styled-components";

const getButton=({type})=>{
    switch(type){
        case 'primary':
            return{
                background:'transparent',
                border:'1px solid white',
                color:'white'
            }
            case 'light':
                return{
                    background:'white',
                    border:'1px solid #fffff',
                    color:'#0D263B'
                }
                case 'dark':
                    return{
                        background:'#0061DF',
                        border:'1px solid #fffff',
                        color:'#0D263B'
                    }
                    default:  return{
                        background:'#0061DF',
                        border:'1px solid #fffff',
                        color:'#0D263B'
                    }

    }
}

const Container=styled.input`
display:flex;
justify-content:center;
align-items:center;
border-radius:2px;


min-width:120px;
font-size:${({fontSize})=>(fontSize?`${fontSize}px`:'14px')};
height:${({height})=>(height?`${height}px`:'44px')};
width:${({width})=>(width?`${width}px`:'100%')};
outline:none;
border:2px solid #e6e9ec;
/* cursor: pointer; */
/* ${getButton}; */

`
export{Container}