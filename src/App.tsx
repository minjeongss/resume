//import './App.css'
import styled, {createGlobalStyle} from 'styled-components';

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
  return (
    <>
      <GlobalStyle />
      <h1>개발자, 김민정입니다. 🐢</h1>
        <div>기록을 중요하게 생각합니다.</div>
        <div>다양한 분야를 모험하는 것을 즐깁니다.</div>
      <Hr />

      <h2>About ME</h2>
      <h3>Contact</h3>
        <div><a href="https://github.com/minjeongss">Github</a></div>
        <div><a href="https://jeonge.tistory.com/">Tech Blog</a></div>
        <div><a href=""></a></div>

      <h3>Education</h3>
        <div>Inha University, 컴퓨터공학 학사 (2020.03 ~ )</div>
      <Hr />

      <h2>About Tech Stack</h2>
      <h3>Language Skill</h3>
        <div>JavaScript(ES6+), TypeScript, React.js, HTML, CSS</div>
        <div>Node.js, Python, ROS, C/C++, Java</div>
      <h3>Tool Skill</h3>  
        <div>Linux, Tableau, Unity</div>
      <Hr />
      
      <h2>About Project</h2>
      <div>투비컨티뉴✈️</div>
      
    </>
  )
}

export default App
