import styled from "styled-components";

const Div = styled.div`
width: 100%;
height: 200px;
transition: 500ms;
`
const Input = styled.input`
    color: ${(props) => props.theme.bgColor};
    background-color: -internal-light-dark(rgb(0, 0, 0), rgb(0, 5, 0));
    outline: none;
    padding: 4px 10px;
    font-size: 18px;
    width: 300px;
    height: 30px;
    border: 1px solid grey;
    border-radius:9px;
    transition: 200ms;
    &:focus {
        transform: scale(100%);
        border: 2px solid #d98903;
      }
    
`;
function Questioniare(prop:any) {
  return ( 
     <Div>
      <h3 style={{transition:"1s"}}>{prop.Question}</h3>
      <label>{prop.label}:</label><br/>
      <Input onChange={prop.targetValue} type={prop.responseType}/>
  </Div>
  )
}

export default Questioniare;
