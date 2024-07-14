import styled from 'styled-components';

const InputStyled = styled.div`
  position: relative;
  margin: 1vh 0;
  textarea {
    max-height: 30vh;
    max-width: 30vw;
    height: 15vh;
  }
  input,
  textarea {
    width: 30vw;
    border: 2px solid transparent;
    border-radius: 10px;
    background-color: #0a0d1a;
    padding: 15px;
    font-size: 20px;
    color: #f5f5f5;
    @media (max-width: 1024px) {
      max-width: 50vw;
      width: 50vw;
    }
  }
  label {
    position: absolute;
    left: 15px;
    color: #9e9e9e;
    pointer-events: none;
    transform: translateY(13px);
    font-size: 18px;
    transition: 150ms cubic-bezier(0.47, 0, 0.745, 0.715);
  }
  input:is(:focus, :valid),
  textarea:is(:focus, :valid) {
    outline: none;
    border: 2px solid #8975fe;
    background-color: transparent;
  }
  input:is(:focus, :valid) + label,
  textarea:is(:focus, :valid) + label {
    transform: translateX(10%) translateY(-50%) scale(0.9);
    background-color: #020617;
    padding: 0 0.2em;
    color: #fff;
  }
`;

export default InputStyled;
