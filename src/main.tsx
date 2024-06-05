import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {createGlobalStyle} from 'styled-components';
import './font.css'
import './index.css'

const GlobalFont=createGlobalStyle`
  #root{
    font-family:"NanumSquare";
  }
`;
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalFont />
    <App />
  </React.StrictMode>,
)