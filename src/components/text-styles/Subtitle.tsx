import React from 'react';
import SubtitleStyled from './SubtitleStyled';

interface SubtitleProps {
  children: React.ReactNode;
}

function Subtitle({ children }: SubtitleProps) {
  return (
    <>
      <SubtitleStyled>{children}</SubtitleStyled>
    </>
  );
}

export default Subtitle;
