import styled from 'styled-components';

const AbilityCardStyled = styled.li`
  width: 15rem;
  height: 6rem;
  border-radius: 5px;
  background-color: #13131f;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.6s;
  &&:hover {
    box-shadow: #ff00f2 0px 0px 15px;
    scale: 1.1;
  }
  p {
    margin: 0;
  }
  @media (max-width: 480px) {
    width: 10rem;
    height: 4rem;
    font-size: 0.7rem;
  }
`;

export default AbilityCardStyled;
