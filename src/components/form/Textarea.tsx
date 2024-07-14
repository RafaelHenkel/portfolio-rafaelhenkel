import InputStyled from './InputStyled';

interface TextareaProps {
  name: string;
  label: string;
}

function Textarea({ name, label }: TextareaProps) {
  return (
    <>
      <InputStyled>
        <textarea name={name} required />
        <label htmlFor={name}>{label}</label>
      </InputStyled>
    </>
  );
}

export default Textarea;
