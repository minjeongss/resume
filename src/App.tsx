import ContentIntro from './components/ContentIntro';
import ContentMe from './components/ContentMe';
import ContentTechStack from './components/ContentTechStack';
import ContentProject from './components/ContentProject';
import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyle=createGlobalStyle`
  #root{
    max-width: 1280px;
    width: 60%;
    margin: auto;
    padding: 2rem;
    text-align: left;
  }
`;

const Hr=styled.hr`
  border:3px solid rgb(136,134,60);
`;

function App() {
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
    </>
  )
}

export default App
