import { Link } from 'react-router-dom';
import navigation from '../../config/navigation';
import HeaderMenuStyled from './HeaderMenuStyled';
import { useState } from 'react';

function HeaderNavegation() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  function toggleMenu() {
    setModalOpen(!modalOpen);
  }
  return (
    <>
      <HeaderMenuStyled className={modalOpen ? 'is-open' : ''}>
        {navigation.map(item => (
          <li key={item.key}>
            <Link to={item.url}>{item.label}</Link>
          </li>
        ))}
      </HeaderMenuStyled>
      <a className="mobile-menu" onClick={toggleMenu}>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0,0,256,256">
          <g fill="#9e2ef6">
            <g transform="scale(5.12,5.12)">
              <path d="M0,9v2h50v-2zM0,24v2h50v-2zM0,39v2h50v-2z"></path>
            </g>
          </g>
        </svg>
      </a>
    </>
  );
}

export default HeaderNavegation;
