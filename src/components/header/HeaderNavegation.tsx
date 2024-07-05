import { Link } from 'react-router-dom';
import navigation from '../../config/navigation';
import HeaderUlStyled from './HeaderUlStyled';

function HeaderNavegation() {
  return (
    <>
      <HeaderUlStyled>
        {navigation.map(item => (
          <li key={item.key}>
            <Link to={item.url}>{item.label}</Link>
          </li>
        ))}
      </HeaderUlStyled>
    </>
  );
}

export default HeaderNavegation;
