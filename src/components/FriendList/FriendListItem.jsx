import PropTypes from 'prop-types';
import {
  FriendListStatOnline,
  FriendItem,
  FriendAvatar,
  FriendName,
} from './FriendList.styled';


export default function FriendListItem({ id, isOnline, avatar, name }) {
  return (
    <FriendItem key={id}>
      <FriendListStatOnline isOnline={isOnline}></FriendListStatOnline>
      <FriendAvatar src={avatar} alt="User avatar" width="84" />
      <FriendName>{name}</FriendName>
    </FriendItem>
  );
}
 
FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}