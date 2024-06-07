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

    width: 50%;
    height: 60%;
    padding: 15px;

    border-radius: 30px;
    background-color: rgba(255,255,255,1);
`;
const ContentDetail=styled.h3`
    width:80%;
`;
const Content=styled.div`
    width: 80%;
`;
const Button=styled.button`
    margin:0;
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
}
const ContentProjectModal = ({project, closeModal}:ModalProps) => {
    const handleBackgroundClick=(e:React.MouseEvent<HTMLDivElement>)=>{
        if(e.target===e.currentTarget) closeModal();
    }
    return (
        <ContainerBack onClick={handleBackgroundClick}>
            <ContainerFront>
                <h2>[ {project.title} ]</h2>
                <ContentDetail>: {project.detail}</ContentDetail>
                <Content>
                    <h3>주소: <a href={project.link} target='_blank'>{project.link}</a></h3>
                    <h3>기간: {project.duration}</h3>
                    <h3>역할: {project.position}</h3>
                    <h3>사용한 기술: {project.tech}</h3>
                    <Button onClick={closeModal}>CLOSE</Button>
                </Content>
            </ContainerFront>
        </ContainerBack>
    );
};

export default ContentProjectModal;