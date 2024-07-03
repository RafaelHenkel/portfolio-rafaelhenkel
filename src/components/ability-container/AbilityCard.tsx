import React from 'react';
import AbilityCardStyled from './AbilityCardStyled';

interface AbilityCardProps {
  children: React.ReactNode;
}

function AbilityCard({ children }: AbilityCardProps) {
  return (
    <>
      <AbilityCardStyled>{children}</AbilityCardStyled>
    </>
  );
}

export default AbilityCard;
