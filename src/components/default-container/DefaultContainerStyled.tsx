import styled from 'styled-components';

interface DefaultContainerProps {
  minHeight?: string;
  alignItems?: string;
}

const DefaultContainerStyled = styled.section<DefaultContainerProps>`
  min-height: ${props => (props.minHeight ? props.minHeight : '40rem')};
  width: 60vw;
  display: flex;
  align-items: ${props => (props.alignItems ? props.alignItems : 'center')};
  justify-content: center;
  flex-direction: column;
  margin-top: 2rem;
  h1 {
    color: #ffffff;
    margin: 0;
    font-size: 3.5rem;
  }
  .line {
    color: #9e2ef6;
    font-weight: 600;
    font-size: 2rem;
  }
  .hello-message {
    color: #a7a7a7;
    font-weight: 400;
    font-size: 1.3rem;
  }
  @media (max-width: 1024px) {
    align-items: center;
    text-align: center;
  }
  @media (max-width: 480px) {
    h1 {
      font-size: 2rem;
    }
    .line {
      font-size: 1.5rem;
    }
    .hello-message {
      font-size: 1.2rem;
    }
  }
`;
export default DefaultContainerStyled;
