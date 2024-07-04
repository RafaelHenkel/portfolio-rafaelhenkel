import styled from 'styled-components';

interface DefaultContainerProps {
  firstContainer?: boolean;
}

const DefaultContainerStyled = styled.section<DefaultContainerProps>`
  min-height: ${props => (props.firstContainer ? '50rem' : '40rem')};
  width: 65%;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  margin-top: 2rem;
`;
export default DefaultContainerStyled;
