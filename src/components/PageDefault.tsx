import React from 'react';
import HeaderDefault from './header/HeaderDefault';
import MainDefaultStyled from './main/MainDefaultStyled';
import FooterDefault from './footer/FooterDefault';

interface PageDefaultProps {
  children: React.ReactNode;
}

function PageDefault({ children }: PageDefaultProps) {
  return (
    <>
      <HeaderDefault />
      <MainDefaultStyled>{children}</MainDefaultStyled>
      <FooterDefault />
    </>
  );
}

export default PageDefault;
