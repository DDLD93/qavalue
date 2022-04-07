import React from 'react'
import styled from "styled-components";
import Navbar from "../Navbar/index"
const Layout = styled.div`
    color: ${(props) => props.theme.color};
    background-color: ${(props) => props.theme.bgColor};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
`;


function Main(prop: any) {
    return (
        <Layout>
           <Navbar/>
            {prop.children}
        </Layout>
        )
}

export default Main