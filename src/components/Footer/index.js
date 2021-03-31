import React from 'react';
import {FooterContainer,FooterLink,FooterLinkItems,FooterLinksContainer,FooterLinksWrapper,FooterLinkTitle,FooterWrap,SocialIconLink,SocialIcons,SocialLogo,SocialMedia,SocialMediaWrap,WebsiteSave} from "./FooterElements";
import {FaFacebook,FaInstagram,FaYoutube,FaTwitter} from "react-icons/all";
import {animateScroll as scroll} from "react-scroll";

const Footer = () => {
    const toogleHome=()=>{
        scroll.scrollToTop();
    }
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                     <FooterLinksWrapper>
                         <FooterLinkItems>
                             <FooterLinkTitle>About us</FooterLinkTitle>
                                 <FooterLink to='/signin'>Library</FooterLink>
                                 <FooterLink to='/signin'>Source</FooterLink>
                                 <FooterLink to='/signin'>Learn more</FooterLink>
                                 <FooterLink to='/signin'>Contacts</FooterLink>
                         </FooterLinkItems>
                         <FooterLinkItems>
                             <FooterLinkTitle>Social Media</FooterLinkTitle>
                             <FooterLink to='/signin'>Instagram</FooterLink>
                             <FooterLink to='/signin'>Facebook</FooterLink>
                             <FooterLink to='/signin'>Youtube</FooterLink>
                         </FooterLinkItems>
                     </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Help Us</FooterLinkTitle>
                            <FooterLink to='/signin'>Donat</FooterLink>
                            <FooterLink to='/signin'>Write us</FooterLink>
                            <FooterLink to='/signin'>Volonters</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Improve skills</FooterLinkTitle>
                            <FooterLink to='/signin'>React</FooterLink>
                            <FooterLink to='/signin'>React-hooks</FooterLink>
                            <FooterLink to='/signin'>Styled components</FooterLink>
                            <FooterLink to='/signin'>Other library</FooterLink>
                        </FooterLinkItems>

                    </FooterLinksWrapper>

                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toogleHome}>Bumblebee</SocialLogo>
                        <WebsiteSave>Bumblebee {new Date().getFullYear()} Save bee and nature </WebsiteSave>
                        <SocialIcons>
                            <SocialIconLink href='/' targer='_blank' arial-label='Facebook'>
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href='/' targer='_blank' arial-label='Instagram'>
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink href='/' targer='_blank' arial-label='Youtube'>
                                <FaYoutube/>
                            </SocialIconLink>
                            <SocialIconLink href='/' targer='_blank' arial-label='Twitter'>
                                <FaTwitter/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
            
        </FooterContainer>
    );
};

export default Footer;
