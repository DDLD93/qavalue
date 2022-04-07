import { ReactChild, ReactFragment, ReactPortal } from "react";
import styled from "styled-components";

const Div = styled.div`
width: -webkit-fill-available;
`

function Summary(prop: { question: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; answer: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; }) {
  return (
    <Div>
        <label style={{fontWeight:"bold"}} >{prop.question}</label>
        <div>{prop.answer}</div>
        <hr />
    </Div>
  )
}

export default Summary