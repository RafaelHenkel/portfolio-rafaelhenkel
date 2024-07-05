import styled from 'styled-components';

interface DefaultContainerProps {
  minHeight?: boolean;
  alignItems?: boolean;
}

const DefaultContainerStyled = styled.section<DefaultContainerProps>`
  min-height: ${props => (props.minHeight ? '50rem' : '40rem')};
  width: 70rem;
  display: flex;
  align-items: ${props => (props.alignItems ? 'start' : 'center')};
  justify-content: center;
  flex-direction: column;
  margin-top: 2rem;
`;
export default DefaultContainerStyled;
