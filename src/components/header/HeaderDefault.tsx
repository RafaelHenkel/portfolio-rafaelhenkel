import HeaderDefaultStyled from './HeaderDefaultStyled';
import HeaderNavegation from './HeaderNavegation';
import { Link } from 'react-router-dom';

function HeaderDefault() {
  return (
    <>
      <HeaderDefaultStyled>
        <Link to="/" style={{ display: 'flex' }}>
          <p className="text-effect">R</p>
          <p className="text-effect">a</p>
          <p className="text-effect">f</p>
          <p className="text-effect">a</p>
          <p className="text-effect">e</p>
          <p className="text-effect">l</p>
        </Link>
        <HeaderNavegation />
      </HeaderDefaultStyled>
    </>
  );
}

export default HeaderDefault;
