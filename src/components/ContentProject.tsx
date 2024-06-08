import { useState } from "react";
import ContentProjectModal from './ContentProjectModal';
import styled from "styled-components";

const ContentIntro=styled.div`
    margin-bottom: 10px;
`;
const Hr=styled.hr`
    border:2px solid rgb(0,0,0,0.2);
`;
const ContainerWrapper=styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`;
const Container=styled.div`
    flex: 1 1 500px;
    box-sizing: border-box;
`;
const ContainerText=styled.button`
    display: flex;
    justify-content: center;
    flex-direction: column;

    // width: 70%;
    width: 100%;
    margin:0;
`;
const ContainerImage=styled.img`
    width:25%;
    object-fit:cover;
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
    content:string;
    takeaway:string;
    imageUrl?:string;
}

const ContentProject = () => {
    const project=[
        {type:"web", title:"[교내 동아리 IGRUS] 팀 Watfle",detail:"영화 리뷰 웹페이지",position:"개발(프론트엔드)",duration:"2020-2021",tech:"JS, CSS, HTML",link:"https://github.com/minjeongss/web-Watfle",
            content:"",takeaway:""},
        {type:"etc", title:"[교내 빅데이터 학회 INBIG] 소모임 데이터 시각화",detail:"데이터 분석",position:"개발",duration:"2021",tech:"Python, Tableau",link:"https://github.com/minjeongss/Data-Visualization",
            content:"",takeaway:""},
        {type:"etc", title:"[개인 팀] SosoVillage",detail:"2D 인디게임",position:"개발,디자인",duration:"2022",tech:"C#, Unity",link:"https://github.com/JeongHyunJi/SosoVillage",
            content:"",takeaway:""},
        {type:"web", title:"[연합 동아리 UMC] 팀 오늘뭐하니",detail:"놀거리 플랫폼 서비스",position:"개발(백엔드)",duration:"2023",tech:"Node.js(ES6)",link:"https://github.com/UMC-LetsDo/what-you-do-today-back",
            content:"",takeaway:""},
        {type:"web", title:"[해커톤 준비] 팀 귀농귀농",detail:"귀농 플랫폼 서비스",position:"개발(프론트엔드)",duration:"2023",tech:"React.js(ES6)",link:"https://github.com/GwinongGwinong/frontend",
            content:"",takeaway:""},
        {type:"web", title:"[교내 동아리 IGRUS] 소모임 Connect",detail:"리액트 강의",position:"강의 보조 및 피드백",duration:"2023",tech:"React.js(ES6)",link:"https://github.com/Connect-Organization/2023-ReactStudy-Jeong",
            content:"",takeaway:""},
        {type:"web", title:"[연합 동아리 GDSC] 팀 나날이",detail:"날씨별 옷 추천 플랫폼 서비스",position:"개발(프론트엔드)",duration:"2023",tech:"React.js(ES6)",link:"https://github.com/Nanali-cody/frontend",
            content:"",takeaway:""},
        {type:"robot", title:"[공간지능 및 로보틱스 연구실] 학부연구생",detail:"다층 환경 주행을 위한 모바일 매니퓰레이터 및 내비게이션 기술",position:"개발(제어)",duration:"2023-2024",tech:"ROS1, Python",link:"https://sites.google.com/view/sparo",
            content:"2023 동계 학부 연구생 인턴십 프로그램, 2024 1학기 학부 연구생 인턴십 프로그램에 참여했습니다. ",takeaway:"모바일 로봇 제어"},
        {type:"robot", title:"[유진로봇] 인턴사원",detail:"청소로봇 개발 테스트 및 UI 시나리오 검증",position:"개발(테스트)",duration:"2024",tech:"Linux",link:"https://yujinrobot.com/",
            content:"청소로봇 연구실 소프트웨어 부서에서 현장실습을 진행했습니다. ",takeaway:"테스트 역량, 리눅스 사용 능력 향상, 시니어 엔지니어와의 소통"},
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
            <ContentIntro>
                <div>2020년부터 2024년도까지 진행했던 프로젝트를 기재하였습니다.</div>
                <div>회사 또는 팀을 클릭하실 경우 자세한 내용을 보실 수 있습니다.</div>
            </ContentIntro>
            <ContainerWrapper>
            {
                project.reverse().map((elem)=>{
                    return (
                        <Container key={elem.title}>
                            <ContainerText onClick={()=>openModal(elem)}>
                                <h3>
                                📂 {elem.title}, {elem.duration}
                                </h3>
                                <h4>{elem.detail}</h4>
                                <div>- 직무: {elem.position}</div>
                                <div>- 사용한 기술: {elem.tech}</div>
                                <h3><a href={elem.link}>📌 주소</a></h3>
                            </ContainerText>
                        </Container>
                    )
                })
            }
            </ContainerWrapper>
            {isModalOpen && selectProject && <ContentProjectModal project={selectProject} closeModal={closeModal}/>}
        </>
    );
};

export default ContentProject;