import PropTypes from 'prop-types';
import s from './FriendList.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
      <div className={s.item}>
        <span className={isOnline ? `${s.isOnline}` : `${s.isOffline}`}>
          {isOnline}
        </span>
        <img className={s.avatar} src={avatar} alt={name} width="48" />
        <p className={s.name}>{name}</p>
      </div>
    );
  };

  FriendListItem.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    
}

export default FriendListItem;

// <ul className={s.list}>
//       {friends.map(friend => (
//         <li className={s.friend} key={friend.id}>
//           <FriendListItem
//             avatar={friend.avatar}
//             name={friend.name}
//             isOnline={friend.isOnline}
//           />
//         </li>
//       ))}
//     </ul>
//   );
// }