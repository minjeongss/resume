import styled from "styled-components";

const ContainerButton=styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    width:100%;
`;
const Button=styled.button`
flex: 1 1 calc(33.33% - 10px);
margin: 5px;
padding: 10px;
text-align: center;
white-space: nowrap; // 텍스트 줄바꿈 방지
text-overflow: ellipsis; // 텍스트가 넘치면 생략 부호 표시
color: #000000;

a {
    color: inherit;
    text-decoration: none;
}
`;

const ContentMe = () => {
    return (
        <>
            <h3>Contact</h3>
                <ContainerButton>
                    <Button onClick={()=>window.open("https://github.com/minjeongss")}>💻️ Github</Button>
                    <Button onClick={()=>window.open("https://jeonge.tistory.com/")}>📚️ Tech Blog</Button>
                    <Button onClick={()=>window.open("mailto:dotoriido@gmail.com")}>📨 Email</Button>
                </ContainerButton>
            <h3>Education</h3>
        <div>Inha University, 컴퓨터공학 학사 (2020.03 ~ )</div>
        </>
    );
};

export default ContentMe;