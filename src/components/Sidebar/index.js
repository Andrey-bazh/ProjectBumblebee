import React from 'react';
import {CloseIcon,Icon,SidebarContainer,SidebarLink,SidebarRoute,SidebarWrapper,SideBtnWrap,SidebarMenu} from "./SbElements";

const Sidebar = ({isOpen,toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='bumblebee' onClick={toggle}>Bumblebee</SidebarLink>
                    <SidebarLink to='bee' onClick={toggle}>Bee</SidebarLink>
                    <SidebarLink to='wasp' onClick={toggle}>Wasp</SidebarLink>
                    <SidebarLink to='hornet' onClick={toggle}>Hornet</SidebarLink>
                    <SidebarLink to='other' onClick={toggle}>Other</SidebarLink>
                    <SidebarLink to='signup' onClick={toggle}>Sign Up</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/signup'>Sign in</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;
