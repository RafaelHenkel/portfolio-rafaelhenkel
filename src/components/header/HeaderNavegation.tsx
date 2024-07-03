import navigation from '../../config/navigation';

function HeaderNavegation() {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '40px' }}>
        {navigation.map(item => (
          <div>
            <a href={item.url}>{item.label}</a>
          </div>
        ))}
      </div>
    </>
  );
}

export default HeaderNavegation;
