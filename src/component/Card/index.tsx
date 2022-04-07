import styled from "styled-components";
import React from 'react'

const Divider = styled.div`
    height:300px;
    width: 400px;
    color: ${(props) => props.theme.color};
    background-color: ${(props) => props.theme.bgColor};
    display: flex;
    padding: 0px 25px;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-end;
    border-radius: 5px;
    box-shadow: 0px 0px 12px 0.01px ${(props) => props.theme.border};   
`;
function Card(prop: any) {
  return (
    <Divider>
        {prop.children}
    </Divider>
  )
}

export default Card