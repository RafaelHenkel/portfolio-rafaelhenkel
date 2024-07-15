import { useState } from 'react';
import ButtonStyled from './ButtonStyled';
import FormStyled from './FormStyled';
import Input from './Input';
import Textarea from './Textarea';
import emailjs from '@emailjs/browser';

function Form() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const templateParams = {
      from_name: name,
      email: email,
      message: message,
    };
    emailjs.send('service_56j57rh', 'template_gvgj3xr', templateParams, 'aEEruA43R3QhPcdER').then(
      response => {
        console.log('EMAIL ENVIADO', response.status, response.text);
        setName('');
        setEmail('');
        setMessage('');
      },
      error => {
        console.log('FAILED', error);
      },
    );
  }
  return (
    <>
      <FormStyled onSubmit={handleSubmit}>
        <Input label="Nome" name="name" type="text" action={setName} value={name} />
        <Input label="E-mail" name="email" type="email" action={setEmail} value={email} />
        <Textarea label="Mensagem" name="message" action={setMessage} value={message} />
        <ButtonStyled type="submit">Enviar</ButtonStyled>
      </FormStyled>
    </>
  );
}

export default Form;
