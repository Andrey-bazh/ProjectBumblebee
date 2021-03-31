import React,{useState} from 'react';
import {MainContainer,MainBg,VideoBg,MainBtnWrapper,MainContent,MainP,MainH1,ArrowForward,ArrowRight} from "./MSElements";
import Video from '../../videos/video.mp4'
import {Button} from "../ButtonElement";

const MainSection = () => {
const[hover,setHover]=useState(false)

    const onHover=()=>{
    setHover(!hover)
    }


    return (
        <MainContainer id="home">
            <MainBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </MainBg>
            <MainContent>
                <MainH1>
                    Перепончатокрылатые насекомые
                </MainH1>
                <MainP>
                     Блог о видах,особенностях , насекомых отряда перепончатокрылатых.Зарегестрируйся, чтобы узнать больше.
                </MainP>
                <MainBtnWrapper>
                    <Button to='signup'
                            onMouseEnter={onHover}
                            onMouseLeave={onHover}
                            primary='true'
                            dark='true'
                    >
                        Погнали{ hover?<ArrowForward/>:<ArrowRight/>}

                    </Button>
                </MainBtnWrapper>
            </MainContent>
        </MainContainer>
    );
};

export default MainSection;
