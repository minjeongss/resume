import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {createGlobalStyle} from 'styled-components';
import './font.css'

const GlobalFont=createGlobalStyle`
  #root{
    font-family:"NanumSquare";
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    line-height: 1.5;
  }
  body {
    margin: 0;
    display: flex;
    place-items: center;
    min-width: 320px;
    min-height: 100vh;
  }
  a {
    font-weight: 500;
    color: #646cff;
    text-decoration: inherit;
  }
  a:hover {
    color: #535bf2;
  }

  button {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    margin: 0.5em 1em;
    font-size: 1em;
    font-family: inherit;
  
    cursor: pointer;
    transition: border-color 0.25s;
  }
  button:hover {
    color: #646cff;
  }
  button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
  button:focus{
    outline:none;
  }
`;
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalFont />
    <App />
  </React.StrictMode>,
)