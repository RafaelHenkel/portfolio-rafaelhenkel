import DefaultContainerStyled from './DefaultContainerStyled';

interface DefaultContainerProps {
  children: React.ReactNode;
  minHeight?: boolean;
  alignItems?: boolean;
}

function DefaultContainer({ children, minHeight, alignItems }: DefaultContainerProps) {
  return (
    <DefaultContainerStyled minHeight={minHeight ?? false} alignItems={alignItems ?? false}>
      {children}
    </DefaultContainerStyled>
  );
}

export default DefaultContainer;
