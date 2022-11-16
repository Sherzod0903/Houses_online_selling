import { Footer } from "antd/lib/layout/layout";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { navbar } from "../../utils/navbar";
import Filter from "../Filter";
import {Button }from "../Generic/";
import { Container, Logo, Section, Wrapper,Link, Main } from "./styled";

export const Home =()=>{
    const navigate = useNavigate();
return( 
<Container>
           <Main> 

    <Wrapper>
       <Section onClick={()=>navigate('/home')} logo><Logo/><h3 style={{color:'white'}}>Houzing</h3></Section>
       <Section>
        {navbar.map(({title,path,hidden},index)=>{
            return !hidden && (
                <Link className={({isActive})=>isActive && 'active'} key={index} to={path}>{title}</Link>
                );
            })}
       </Section>
       <Section>
        <Button onClick={()=>navigate('/signin')} type='primary'>Sign in </Button>
        {/* <Button onClick={()=>navigate('/signup')} type='primary'>Sign up </Button> */}

       </Section>

        </Wrapper>
            </Main>
            <Filter/>
    <Outlet/>
    <Footer/>
</Container>


)
}
export default Home;