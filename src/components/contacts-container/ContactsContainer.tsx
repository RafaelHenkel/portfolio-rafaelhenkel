import ContactContainerStyled from './ContactsContainerStyled';
import linkedinImage from '../../../public/linkedin-image.png';
import githubImage from '../../../public/github-image.png';
import whatsappImage from '../../../public/whatsapp-image.png';
import emailImage from '../../../public/email-image.png';
import ContactsImage from './ContactsImage';
import ContactsContentStyled from './ContactsContentStyled';
import ContactContentStyled from './ContactsContentStyled';

function ContactsContainer() {
  return (
    <>
      <ContactContainerStyled>
        <ContactsContentStyled href="https://www.linkedin.com/in/rafael-henkel/" target="_blank">
          <ContactsImage>
            <img src={linkedinImage} alt="Linkedin" />
          </ContactsImage>
          <h3>Linkedin</h3>
          <small>Rafael Henkel</small>
        </ContactsContentStyled>
        <ContactContentStyled href="https://github.com/RafaelHenkel" target="_blank">
          <ContactsImage>
            <img src={githubImage} alt="Github" />
          </ContactsImage>
          <h3>Github</h3>
          <small>@RafaelHenkel</small>
        </ContactContentStyled>
        <ContactsContentStyled href="https://wa.me/5551998256812" target="_blank">
          <ContactsImage>
            <img src={whatsappImage} alt="Whatsapp" />
          </ContactsImage>
          <h3>Whatsapp</h3>
          <small>+55 (51) 99825-6812</small>
        </ContactsContentStyled>
        <ContactsContentStyled href="mailto:contato@rafaelhenkel.com" target="_blank">
          <ContactsImage>
            <img src={emailImage} alt="Email" />
          </ContactsImage>
          <h3>E-mail</h3>
          <small>rafael0henkel1@gmail.com</small>
        </ContactsContentStyled>
      </ContactContainerStyled>
    </>
  );
}

export default ContactsContainer;
