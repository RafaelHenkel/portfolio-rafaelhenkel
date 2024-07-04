import { Link } from 'react-router-dom';
import navigation from '../../config/navigation';

function HeaderNavegation() {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '40px' }}>
        {navigation.map(item => (
          <div>
            <Link key={item.key} to={item.url}>
              {item.label}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default HeaderNavegation;
