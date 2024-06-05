import React from 'react';
import styled from 'styled-components';

const Container=styled.div`
    display:flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;
    position: fixed; //브라우저 전체 화면으로 배치
    top:0;
    left:0;

    background: rgba(0,0,0,0.5);
`;
const Content=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    width: 80%;
    height:60%;
    padding:15px;

    border-radius: 30px;
    background-color: rgba(255,255,255,1);
`;

export interface ModalProps{
    closeModal:()=>void;
}

const ContentProjectModal = ({closeModal}:ModalProps) => {
    const handleBackgroundClick=(e:React.MouseEvent<HTMLDivElement>)=>{
        if(e.target===e.currentTarget) closeModal();
    }
    return (
        <Container onClick={handleBackgroundClick}>
            <Content>
                <h2>웹 프로젝트</h2>
                <h3>기간</h3>
                <h3>역할</h3>
                <button onClick={closeModal}>CLOSE</button>
            </Content>
        </Container>
    );
};

export default ContentProjectModal;