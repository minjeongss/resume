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
                    <Button><a href="https://github.com/minjeongss" target='_blank'>💻️ Github</a></Button>
                    <Button><a href="https://jeonge.tistory.com/" target='_blank'>📚️ Tech Blog</a></Button>
                    <Button><a href="mailto:dotoriido@gmail.com" target='_blank'>📨 Email</a></Button>
                </ContainerButton>
            <h3>Education</h3>
        <div>Inha University, 컴퓨터공학 학사 (2020.03 ~ )</div>
        </>
    );
};

export default ContentMe;