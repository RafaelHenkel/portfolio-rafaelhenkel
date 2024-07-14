import styled from 'styled-components';

const ButtonStyled = styled.button`
  width: 7rem;
  height: 3rem;
  background-color: transparent;
  border: 3px solid #9123e6;
  border-radius: 10px;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 700;
  margin: 2rem 0;
  &:hover {
    color: #333333;
    box-shadow: rgba(255, 255, 255, 0.56) 0px 22px 70px 4px;
    background-color: #ffffff;
  }
`;

export default ButtonStyled;
