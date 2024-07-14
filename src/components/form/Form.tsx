import ButtonStyled from './ButtonStyled';
import FormStyled from './FormStyled';
import Input from './Input';
import Textarea from './Textarea';

function Form() {
  function handleSubmit() {}
  return (
    <>
      <FormStyled onSubmit={handleSubmit}>
        <Input label="Nome" name="name" type="text" />
        <Input label="E-mail" name="email" type="email" />
        <Textarea label="Mensagem" name="message" />
        <ButtonStyled>Enviar</ButtonStyled>
      </FormStyled>
    </>
  );
}

export default Form;
