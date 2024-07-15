import InputStyled from './InputStyled';

interface InputProps {
  name: string;
  label: string;
  type: string;
  value: string;
  action: (value: string) => void;
}

function Input({ name, label, type, value, action }: InputProps) {
  return (
    <>
      <InputStyled>
        <input type={type} name={name} onChange={e => action(e.target.value)} value={value} required />
        <label htmlFor={name}>{label}</label>
      </InputStyled>
    </>
  );
}

export default Input;
