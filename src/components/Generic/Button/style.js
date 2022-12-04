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
                    border:'1px solid #E6E9EC',
                    color:'#0D263B'
                }
                case 'dark':
                    return{
                        background:'#0061DF',
                        border:'none',
                        color:'white'
                    }
                    default:  return{
                        background:'#0061DF',
                        border:'1px solid #fffff',
                        color:'#0D263B'
                    }

    }
}

const Container=styled.button`
display:flex;
justify-content:center;
align-items:center;
min-width:120px;
border-radius:2px;
font-size:${({fontSize})=>(fontSize?`${fontSize}px`:'14px')};
height:${({height})=>(height?`${height}px`:'44px')};
width:${({width})=>(width?`${width}px`:'120px')};
border:none;

cursor: pointer;
${getButton};
:active{
    opacity:0.7;
}
`
export{Container}