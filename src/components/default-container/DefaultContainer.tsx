import DefaultContainerStyled from './DefaultContainerStyled';

interface DefaultContainerProps {
  children: React.ReactNode;
  minHeight?: string;
  alignItems?: string;
}

function DefaultContainer({ children, minHeight, alignItems }: DefaultContainerProps) {
  return (
    <DefaultContainerStyled minHeight={minHeight} alignItems={alignItems}>
      {children}
    </DefaultContainerStyled>
  );
}

export default DefaultContainer;
