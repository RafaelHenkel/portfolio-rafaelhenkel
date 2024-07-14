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

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (name || email || message) {
      const templateParams = {
        from_name: name,
        email: email,
        message: message,
      };
      emailjs.send('service_56j57rh', 'template_gvgj3xr', templateParams, 'aEEruA43R3QhPcdER').then(
        response => {
          console.log('EMAIL ENVIADO', response.status, response.text);
        },
        error => {
          console.log('FAILED', error);
        },
      );
      setName('');
      setEmail('');
      setMessage('');
    }
  }
  return (
    <>
      <FormStyled onSubmit={handleSubmit}>
        <Input label="Nome" name="name" type="text" action={setName} />
        <Input label="E-mail" name="email" type="email" action={setEmail} />
        <Textarea label="Mensagem" name="message" action={setMessage} />
        <ButtonStyled type="submit">Enviar</ButtonStyled>
      </FormStyled>
    </>
  );
}

export default Form;
