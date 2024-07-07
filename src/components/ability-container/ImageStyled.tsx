import styled from 'styled-components';

const ImageStyled = styled.img`
  width: 30px;
  height: 30px;
  @media (max-width: 480px) {
    width: 20px;
    height: 20px;
  }
`;

export default ImageStyled;
