import DefaultContainerStyled from './DefaultContainerStyled';

interface DefaultContainerProps {
  children: React.ReactNode;
  firstContainer?: boolean;
}

function DefaultContainer({ children, firstContainer }: DefaultContainerProps) {
  return <DefaultContainerStyled firstContainer={firstContainer ?? false}>{children}</DefaultContainerStyled>;
}

export default DefaultContainer;
