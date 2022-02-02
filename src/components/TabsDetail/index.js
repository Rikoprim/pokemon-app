import React, { useState } from 'react';
import About from './About';
import BaseStats from './BaseStats';
import Evolution from './Evolution';
import { BtnTabs, BtnWrapper, Container } from './TabsDetailStyled';

const TabsDetail = () => {
  const [switchBtn, setswitchBtn] = useState('About');
  
  const onGoto = (val) => {
    setswitchBtn(val)
  }

  return (
    <Container>
      <BtnWrapper>
        <BtnTabs 
          style={{backgroundColor: switchBtn === 'About' ? '#e7e7e9' : '#f3f3f3'}} 
          onClick={() => onGoto('About')}>About</BtnTabs>
        <BtnTabs 
          style={{backgroundColor: switchBtn === 'Stats' ? '#e7e7e9' : '#f3f3f3'}}
          onClick={() => onGoto('Stats')}>Base Stats</BtnTabs>
        <BtnTabs 
          style={{backgroundColor: switchBtn === 'Evolution' ? '#e7e7e9' : '#f3f3f3'}}
          onClick={() => onGoto('Evolution')}>Evolution</BtnTabs>
      </BtnWrapper>
        { switchBtn === 'About' ? <About /> : ' '}
        { switchBtn === 'Stats' ? <BaseStats /> : ' '}
        { switchBtn === 'Evolution' ? <Evolution /> : ' '}
    </Container>
  );
};

export default TabsDetail;
