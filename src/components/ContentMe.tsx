import styled from "styled-components";
const Button=styled.button`
    width:30%;

`;

const ContentMe = () => {
    return (
        <>
            <h3>Contact</h3>
                <Button><a href="https://github.com/minjeongss" target='_blank'>💻️ Github</a></Button>
                <Button><a href="https://jeonge.tistory.com/" target='_blank'>📚️ Tech Blog</a></Button>
                <Button><a href="mailto:dotoriido@gmail.com" target='_blank'>📨 Email</a></Button>
            <h3>Education</h3>
        <div>Inha University, 컴퓨터공학 학사 (2020.03 ~ )</div>
        </>
    );
};

export default ContentMe;