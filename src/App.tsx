import React from "react";
import GlobalStyle from "./GlobalStyle/style";
import Routes from "./Routes";
import { LoginProvider } from "./Providers/Login";
import { RegisterProvider } from "./Providers/Register";
function App() {
  return (
    <>
      <RegisterProvider>
        <LoginProvider>
          <GlobalStyle />
          <Routes />
        </LoginProvider>
      </RegisterProvider>
    </>
  );
}

export default App;
