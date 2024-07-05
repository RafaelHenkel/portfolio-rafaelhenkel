import React from 'react';
import AboutContainerStyled from './AboutContainerStyled';
import AboutContentStyled from './AboutContentStyled';
import AboutImageStyled from './AboutImageStyled';
import myImage from '../../assets/image.jpeg';
import AboutButtonStyled from './AboutButtonStyled';
import { Link } from 'react-router-dom';

interface AboutContainerProps {
  children: React.ReactNode;
}
function AboutContainer({ children }: AboutContainerProps) {
  return (
    <>
      <AboutContainerStyled>
        <AboutImageStyled src={myImage} alt="Imagem Rafael Henkel" />
        <AboutContentStyled>
          {children}
          <Link to="/about">
            <AboutButtonStyled>Ler mais</AboutButtonStyled>
          </Link>
        </AboutContentStyled>
      </AboutContainerStyled>
    </>
  );
}

export default AboutContainer;
