import PropTypes from 'prop-types';

import { BsCircleFill } from 'react-icons/bs';

export const Section = ({ friends }) => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      {friends.map(({ id, avatar, name, isOnline }) => (
        <div key={id}>
          <li
            style={{
              height: '100vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: 40,
              color: '#010101',
            }}
          >
            <span>{isOnline}</span>
            <img src={avatar} alt="User avatar" width="48" />
            <p>
              {name}
              <BsCircleFill fill="green" />
            </p>
          </li>
        </div>
      ))}
    </div>
  );
};
// <h2>Hello World</h2>;
PropTypes.Section = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.string.isRequired,
    })
  ),
};
