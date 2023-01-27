import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @font-face {
      font-family: "Britney";
      src: url("./fonts/BrittanySignature.ttf") format("truetype");
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: "roboto";
        text-decoration: none;
    }

    a {
        color: black;
    }
`;
