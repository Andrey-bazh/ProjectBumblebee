import React,{useState,useEffect} from 'react';
import {Nav,NavbarContainer,NavLogo,MobileIcon,NavItem,NavLinks,NavMenu,NavBtn,NavBtnLink,ImgLogo} from "./NbElements";
import {FaBars} from 'react-icons/fa'
import logo from '../../images/logo.svg'
import {IconContext} from "react-icons";
import {animateScroll as scroll} from 'react-scroll'

const Navbar = ({toggle}) => {

    const [scrollNav,setScrollNav]=useState(false)

    const changeNav=()=>{
        if(window.scrollY>=80){
            setScrollNav(true)
         }else {
            setScrollNav(false)
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll',changeNav,[])

    })
    const toogleHome=()=>{
        scroll.scrollToTop();
    }
    return (
      <>
          <IconContext.Provider value={{color:'black'}}>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to='/' onClick={toogleHome} >
                    <ImgLogo src={logo} />
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='bumblebee'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}

                        >Bumblebee</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='bee'
                                  smooth={true}
                                  duration={500}
                                  spy={true}
                                  exact='true'
                                  offset={-80}

                        >Bee</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='wasp'
                                  smooth={true}
                                  duration={500}
                                  spy={true}
                                  exact='true'
                                  offset={-80}
                        >Wasp</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='hornet'
                                  smooth={true}
                                  duration={500}
                                  spy={true}
                                  exact='true'
                                  offset={-80}
                        >Hornet</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='other'
                                  smooth={true}
                                  duration={500}
                                  spy={true}
                                  exact='true'
                                  offset={-80}
                        >Other </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='signup'>Sign up</NavLinks>
                    </NavItem>

                </NavMenu>
                <NavBtn>
                     <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
            </Nav>
          </IconContext.Provider>

          </>
    );
};

export default Navbar;
