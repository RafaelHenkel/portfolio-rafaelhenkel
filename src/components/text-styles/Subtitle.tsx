import React from 'react';
import SubtitleStyled from './SubtitleStyled';

interface SubtitleProps {
  children: React.ReactNode;
  padding?: boolean;
}

function Subtitle({ children, padding }: SubtitleProps) {
  return (
    <>
      <SubtitleStyled padding={padding ?? true}>{children}</SubtitleStyled>
    </>
  );
}

export default Subtitle;
