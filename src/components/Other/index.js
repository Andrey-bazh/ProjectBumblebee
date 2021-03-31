import React from 'react';
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'

import {OtherContainer,OtherCard,OtherH1,OtherH2,OtherIcon,OtherP,OtherWrapper} from "./OtherElements";

const OtherCardP = () => {
    return (
        <OtherContainer id='other'>
            <OtherH1>Другая информация</OtherH1>
            <OtherWrapper>
                <OtherCard>
                    <OtherIcon src={Icon1}/>
                    <OtherH2>Другая информация</OtherH2>
                    <OtherP>Информация</OtherP>
                </OtherCard>
                <OtherCard>
                    <OtherIcon src={Icon2}/>
                    <OtherH2>Другая информация</OtherH2>
                    <OtherP>Информация</OtherP>
                </OtherCard>
                <OtherCard>
                    <OtherIcon src={Icon3}/>
                    <OtherH2>Другая информация</OtherH2>
                    <OtherP>Информация</OtherP>
                </OtherCard>
            </OtherWrapper>
        </OtherContainer>
    );
};

export default OtherCardP;
