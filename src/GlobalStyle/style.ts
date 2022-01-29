import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    outline: 0;
}

:root{
   --green: #27AE60;
   --red: #EB5757;
   --grey-100: #333333;
   --grey-50: #828282;
   --grey-20: #e0e0e0;
   --grey-0: #f5f5f5;
   --error: #E60000;
   --warning: #ffcd07;
   --sucess: #168821;
   
}

body{
    background-color: var(--grey-0) ;
    color: var(---grey-100);
    font-family: 'Inter', sans-serif;
}
button{
    cursor: pointer;
    border: none;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
}
a{
    text-decoration: none;
}
h1{
    font-size: 26px;
}
h2{
    font-size: 22px;
}
h3{
 font-size: 18px;
}

`;

export default GlobalStyle;
