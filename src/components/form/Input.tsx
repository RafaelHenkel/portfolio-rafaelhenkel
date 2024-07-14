import InputStyled from './InputStyled';

interface InputProps {
  name: string;
  label: string;
  type: string;
}

function Input({ name, label, type }: InputProps) {
  return (
    <>
      <InputStyled>
        <input type={type} name={name} required />
        <label htmlFor={name}>{label}</label>
      </InputStyled>
    </>
  );
}

export default Input;
