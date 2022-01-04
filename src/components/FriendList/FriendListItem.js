import {
  FriendListStatOnline,
  FriendItem,
  FriendAvatar,
  FriendName,
} from './FriendList.styled';
import { ProfileName } from '../Profile/Profile.styled';

export default function FriendListItem({ id, isOnline, avatar, name }) {
  return (
    <FriendItem key={id}>
      <FriendListStatOnline isOnline={isOnline}></FriendListStatOnline>
      <FriendAvatar src={avatar} alt="User avatar" width="84" />
      <FriendName>{name}</FriendName>
    </FriendItem>
  );
}
