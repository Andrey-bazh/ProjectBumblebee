import React,{useState} from 'react';
import {MainContainer,MainBg,VideoBg,MainBtnWrapper,MainContent,MainP,MainH1,ArrowForward,ArrowRight} from "./MSElements";
import Video from '../../videos/video.mp4'
import {Button} from "../ButtonElement";
import {motion} from 'framer-motion'
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
                <motion.div
                initial={{
                    opacity:0
                }}
                animate={{
                    opacity:1
                }}
                transition={{
                    delay:1,
                    duration:2
                }}
                >
                <MainH1>
                    Перепончатокрылатые насекомые
                </MainH1>
               </motion.div>
                <motion.div
                    initial={{
                        opacity:0
                    }}
                    animate={{
                        opacity:1
                    }}
                    transition={{
                        delay:2,
                        duration:2
                    }}
                >
                <MainP>
                     Блог о видах,особенностях , насекомых отряда перепончатокрылатых.Зарегистрируйся, чтобы узнать больше.
                </MainP>
                </motion.div>
                <MainBtnWrapper>
                    <motion.div
                        initial={{
                            opacity:0
                        }}
                        animate={{
                            opacity:1
                        }}
                        transition={{
                            delay:3,
                            duration:2
                        }}
                    >
                    <Button to='signup'
                            onMouseEnter={onHover}
                            onMouseLeave={onHover}
                            primary='true'
                            dark='true'
                    >
                        Погнали{ hover?<ArrowForward/>:<ArrowRight/>}

                    </Button>
                    </motion.div>
                </MainBtnWrapper>
            </MainContent>
        </MainContainer>
    );
};

export default MainSection;
