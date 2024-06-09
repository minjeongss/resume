import React from 'react';
import styled from 'styled-components';

const ContainerBack=styled.div`
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
const ContainerFront=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    width: 70%;
    max-width: 800px; //최대 너비 고정
    height: 80%;
    padding: 15px;

    border-radius: 30px;
    background-color: rgba(255,255,255,1);

    @media (max-width:600px){ //작은 화면 처리
        width:80%;
        padding:10px;
    }
`;
const ContentTitle=styled.h2`
    width:80%;
    text-align: center;
    word-wrap:break-word; //화면 벗어나지 않게 설정
    overflow-wrap:break-word; //화면 벗어나지 않게 설정

    a {
        display: block;
        width: 100%;
    }
`;
const ContentDetail=styled.h3`
    width:80%;
    word-wrap:break-word; //화면 벗어나지 않게 설정
    overflow-wrap:break-word; //화면 벗어나지 않게 설정
`;
const Content=styled.div`
    width: 80%;
    flex-grow:1; //남은 공간 모두 차지
    overflow-y:auto; //내용 길어지면 스크롤
`;
const Button=styled.button`
    margin:0;
    padding: 10px 20px;
    background-color: #646cff;
    color: white;
    cursor: pointer;
    &:hover{
        color: white;
    }
`;
export interface ModalProps{
    project:Project;
    closeModal:()=>void;
}
interface Project{
    title:string;
    detail:string;
    position:string;
    duration:string;
    tech:string;
    link:string;
    content:string;
    takeaway:string;
}
const ContentProjectModal = ({project, closeModal}:ModalProps) => {
    const handleBackgroundClick=(e:React.MouseEvent<HTMLDivElement>)=>{
        if(e.target===e.currentTarget) closeModal();
    }
    return (
        <ContainerBack onClick={handleBackgroundClick}>
            <ContainerFront>
                <ContentTitle><a href={project.link}>{project.title}</a></ContentTitle>
                <ContentDetail>: {project.detail}</ContentDetail>
                <Content>
                    <h3>기간: {project.duration}</h3>
                    <h3>직무: {project.position}</h3>
                    <h3>사용한 기술: {project.tech}</h3>
                    {project.content && 
                        <>
                            <h3>개발 내용</h3>
                                <div>{project.content}</div>
                            <h3>배운 점/느낀 점</h3>
                                <div>{project.takeaway}</div>
                        </>
                    }
                    <h3>📌 주소: <a href={project.link} target='_blank'>
                        {`${project.link}`}
                    </a></h3>
                </Content>
                <Button onClick={closeModal}>CLOSE</Button>
            </ContainerFront>
        </ContainerBack>
    );
};

export default ContentProjectModal;