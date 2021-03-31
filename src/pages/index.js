import React,{useState} from 'react';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import MainSection from "../components/MainSection";
import InfoSection from "../components/InfoSection";
import OtherCardP  from "../components/Other";
import Footer from "../components/Footer";
import {homeObjOne, homeObjThree, homeObjTwo,homeObjFour} from "../components/InfoSection/Data";

const Home = () => {
    const  [isOpen,setIsOpen]=useState(false)
    const toggle=()=>{
        setIsOpen(!isOpen)
    }

    return (
        <>
           <Sidebar isOpen={isOpen} toggle={toggle}/>
           <Navbar toggle={toggle}/>
           <MainSection/>
           <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <InfoSection {...homeObjThree}/>
            <InfoSection {...homeObjFour}/>
            <OtherCardP/>
            <Footer/>
        </>
    );
};

export default Home;
