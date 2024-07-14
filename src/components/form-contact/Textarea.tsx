import InputStyled from './InputStyled';

interface TextareaProps {
  name: string;
  label: string;
  action: (value: string) => void;
}

function Textarea({ name, label, action }: TextareaProps) {
  return (
    <>
      <InputStyled>
        <textarea name={name} onChange={e => action(e.target.value)} required />
        <label htmlFor={name}>{label}</label>
      </InputStyled>
    </>
  );
}

export default Textarea;
