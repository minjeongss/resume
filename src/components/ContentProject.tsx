import { useState } from "react";
import ContentProjectModal from './ContentProjectModal';
import styled from "styled-components";

const Hr=styled.hr`
    border:2px solid rgb(0,0,0,0.2);
`;
const Box=styled.div`
    &:hover{

    }
`;
const Button=styled.button`
    font-size: 0.8em;
`;

interface Project{
    title:string;
    detail:string;
    position:string;
    duration:string;
    tech:string;
    link:string;
}

const ContentProject = () => {
    const project=[
        {title:"Watfle",detail:"영화 리뷰 웹페이지",position:"개발(프론트엔드)",duration:"2020-2021",tech:"JS, CSS, HTML",link:"https://github.com/minjeongss/web-Watfle"},
        {title:"DataVisualization",detail:"데이터 분석",position:"개발",duration:"2021",tech:"Python, Tableau",link:"https://github.com/minjeongss/Data-Visualization"},
        {title:"SosoVillage",detail:"2D 인디게임",position:"개발,디자인",duration:"2022",tech:"C#, Unity",link:"https://github.com/JeongHyunJi/SosoVillage"},
        {title:"오늘뭐하니",detail:"놀거리 플랫폼 서비스",position:"개발(백엔드)",duration:"2023",tech:"Node.js(ES6)",link:"https://github.com/UMC-LetsDo/what-you-do-today-back"},
        {title:"귀농귀농",detail:"귀농 플랫폼 서비스",position:"개발(프론트엔드)",duration:"2023",tech:"React.js(ES6)",link:"https://github.com/GwinongGwinong/frontend"},
        {title:"Connect",detail:"리액트 강의",position:"강의 보조 및 피드백",duration:"2023",tech:"React.js(ES6)",link:"https://github.com/Connect-Organization/2023-ReactStudy-Jeong"},
        {title:"나날이",detail:"날씨별 옷 추천 플랫폼 서비스",position:"개발(프론트엔드)",duration:"2023",tech:"React.js(ES6)",link:"https://github.com/Nanali-cody/frontend"},
        {title:"SPARO 학부연구생",detail:"다층 환경 주행을 위한 모바일 매니퓰레이터 및 내비게이션 기술",position:"개발(제어)",duration:"2023-2024",tech:"ROS1, Python",link:"https://sites.google.com/view/sparo"},
        {title:"유진로봇 인턴사원",detail:"청소로봇 개발 테스트 및 UI 시나리오 검증",position:"개발(테스트)",duration:"2024",tech:"Linux",link:"https://yujinrobot.com/"},
    ];

    const [isModalOpen,setIsModalOpen]=useState(false);
    const [selectProject, setSelectProject]=useState<Project | null>(null);
    
    const openModal=(elem:Project)=>{
        setIsModalOpen(true);
        setSelectProject(elem);
    };
    const closeModal=()=>{
        setIsModalOpen(false);
        setSelectProject(null);
    }
    
        return (
        <>
            {
                project.reverse().map((elem)=>{
                    return (
                        <Box>
                            <h3>
                                <a href={elem.link}>{elem.title}</a>, 
                                {elem.duration}
                                <Button onClick={()=>openModal(elem)}>Detail</Button>
                            </h3>
                            <div>{elem.detail}</div>
                            <div>역할: {elem.position}, {elem.tech}</div>
                        </Box>
                    )
                })
            }
            {isModalOpen && selectProject && <ContentProjectModal project={selectProject} closeModal={closeModal}/>}
        </>
    );
};

export default ContentProject;