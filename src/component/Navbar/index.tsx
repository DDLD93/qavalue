import { useContext } from "react";
import styled from "styled-components";
import { StateContext } from "../../provider/state";

import light from "../../assets/light.png";
import dark from "../../assets/dark.png";

const Navbar = styled.nav`
  color: ${(props) => props.theme.color};
  border-bottom-color: ${(props) => props.theme.border};
  border-bottom-style: solid;
  border-bottom-width: thin;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 30px;
  padding: 10px 50px;
  box-shadow: 0px 0px 12px 0.01px ${(props) => props.theme.border};
  position: fixed;
  top: 0%;
`;
const Image = styled.img`
  color: white;
  width: 30px;
  margin-left: 20px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  
`;

function Index() {
  const { toggleDarkMode, darkMode } = useContext(StateContext);
  return (
    <Navbar>
      <p style={{ margin: 0 }}>Qavalue Test</p>

      <Image
        onClick={() => toggleDarkMode()}
        src={darkMode ? dark : light}
        width="30"
        height="30"
        alt=""
      />
    </Navbar>
  );
}

export default Index;
