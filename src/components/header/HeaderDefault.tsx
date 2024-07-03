import HeaderDefaultStyled from './HeaderDefaultStyled';
import HeaderNameStyled from './HeaderNameStyled';
import HeaderNavegation from './HeaderNavegation';

function HeaderDefault() {
  return (
    <>
      <HeaderDefaultStyled>
        <HeaderNameStyled>
          <p className="text-effect">R</p>
          <p className="text-effect">a</p>
          <p className="text-effect">f</p>
          <p className="text-effect">a</p>
          <p className="text-effect">e</p>
          <p className="text-effect">l</p>
        </HeaderNameStyled>
        <HeaderNavegation />
      </HeaderDefaultStyled>
    </>
  );
}

export default HeaderDefault;
