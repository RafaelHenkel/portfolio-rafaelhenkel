import { Link } from 'react-router-dom';
import navigation from '../../config/navigation';
import HeaderMenuStyled from './HeaderMenuStyled';

function HeaderNavegation() {
  return (
    <>
      <HeaderMenuStyled>
        {navigation.map(item => (
          <li key={item.key}>
            <Link to={item.url}>{item.label}</Link>
          </li>
        ))}
      </HeaderMenuStyled>
    </>
  );
}

export default HeaderNavegation;
