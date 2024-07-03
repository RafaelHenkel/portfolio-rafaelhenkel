import styled from 'styled-components';

const AbilityCardStyled = styled.div`
  width: 18rem;
  height: 8rem;
  border-radius: 5px;
  background-color: #13131f;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.6s;
  &&:hover {
    box-shadow: #ff00f2 0px 0px 15px;
  }
`;

export default AbilityCardStyled;
