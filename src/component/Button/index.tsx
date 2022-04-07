import React from 'react'
import styled from "styled-components";
const BTN = styled.button`
  color: ${(props) => props.theme.fontColor};
  width: 85px;
  height: 35px;
  border: none;
  border-radius:4px;
  outline:none;
  background-color: #e69000;
  font-size: 15px;
  padding: 8px;
  color: white;
  transition: 700ms;
  &:hover {
    transform: scale(105%);
  }
  &:active {
    transform: scale(99%);
    background-color: #d98903;
  }
`;

function Button(prop:any) {
  return (
    <BTN onClick={prop.click} >

      {prop.children}
    </BTN>
  )
}

export default Button