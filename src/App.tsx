import React from "react";
import {BrowserRouter} from "react-router-dom";
import {createGlobalStyle} from "styled-components";
import Content from "./Content";
import './i18n';

const GlobalStyle = createGlobalStyle`
  html {
    width: 100%;
    height: 100%;
    background: #dee1e7;
  }

  body {
    margin: 0;

    .root {
      width: 100%;
      margin: 0;
      padding: 0;
      display: flex;

      .page {
        overflow-y: auto;
        min-height: 0;
        flex: 1;
        user-select: none;
        box-sizing: border-box;
      }
    }
  }
`;

const App = () => {
    return <div style={{width: '100%', height: '100%'}}>
        <GlobalStyle/>
        <BrowserRouter>
            <Content/>
        </BrowserRouter>
    </div>;
};

export default App;