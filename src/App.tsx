import ContentIntro from './components/ContentIntro';
import ContentMe from './components/ContentMe';
import ContentTechStack from './components/ContentTechStack';
import ContentProject from './components/ContentProject';
import styled, {createGlobalStyle} from 'styled-components';

import ContentProjectModal from './components/ContentProjectModal';
import { useState } from 'react';

const GlobalStyle=createGlobalStyle`
  #root{
    max-width: 1280px;
    width: 45%;
    margin: auto;
    padding: 2rem;
    text-align: left;
  }
`;

const Hr=styled.hr`
  border:3px solid rgb(136,134,60);
`;

function App() {
  const [isModalOpen,setIsModalOpen]=useState(false);
  const openModal=()=>setIsModalOpen(true);
  const closeModal=()=>setIsModalOpen(false);

  return (
    <>
      <GlobalStyle />
      <ContentIntro />
      <Hr />

      <h2>About ME</h2>
      <ContentMe />
      <Hr />

      <h2>About Tech Stack</h2>
      <ContentTechStack />
      <Hr />
      
      <h2>About Project</h2>
      <ContentProject />
      <button onClick={openModal}>Modal Test</button>
      {isModalOpen && <ContentProjectModal closeModal={closeModal}/>}
    </>
  )
}

export default App
