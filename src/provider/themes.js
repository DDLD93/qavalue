import {useContext } from "react";
import { createGlobalStyle } from "styled-components";
import  { ThemeProvider } from "styled-components";
import { StateContext } from "./state";





 const lightTheme = {
  body: "#fff",
  color:"#000",
  border: "#ced6e2",
  BgColor: "white",
  primary: "green",
  secondary: "",
  acent: ""
};

 const darkTheme = {
  body: "black",
  color:"#fff",
  border: "#484848",
  BgColor: "black",
  primary: "yellow",
  secondary: "",
  acent: ""
};

const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.body};
    transition: 500ms;

	}
`;
const GobalThemeProvider = ({children}) => {
  const {darkMode} = useContext(StateContext)

  return(
    <ThemeProvider theme={darkMode?darkTheme:lightTheme} >
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}
export default GobalThemeProvider