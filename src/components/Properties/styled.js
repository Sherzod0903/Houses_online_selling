import styled  from "styled-components";

const Container=styled.div`
/* width:100%;
display:flex;
flex-wrap:wrap;
justify-content:center; */
/* align-items:center; */
/* gap:20px; */


display:grid;
grid-auto-flow:row;
grid-template-columns: repeat(auto-fit,minmax(330px, 1fr));
grid-gap:20px;
padding:var(--padding);
max-width:1440px;
width:100%;
margin:auto;
`

export{ Container }