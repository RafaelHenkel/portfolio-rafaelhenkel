import React from 'react';
import AboutContainerStyled from './AboutContainerStyled';
import AboutContentStyled from './AboutContentStyled';
import AboutImageStyled from './AboutImageStyled';
import myImage from '../../assets/image.jpeg';

interface AboutContainerProps {
  children: React.ReactNode;
}
function AboutContainer({ children }: AboutContainerProps) {
  return (
    <>
      <AboutContainerStyled>
        <AboutImageStyled src={myImage} alt=""></AboutImageStyled>
        <AboutContentStyled>{children}</AboutContentStyled>
      </AboutContainerStyled>
    </>
  );
}

export default AboutContainer;
