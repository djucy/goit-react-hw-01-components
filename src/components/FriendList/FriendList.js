import { Container, ContentPosition } from '../CommonStyle/Container.styled';
import FriendListItem from './FriendListItem';

export default function FriendList({ items }) {
  return (
    <Container>
      <ContentPosition>
        <ul className="friend-list">
          {items.map(item => (
            <FriendListItem
              key={item.id}
              name={item.name}
              avatar={item.avatar}
              isOnline={item.isOnline}
            />
          ))}
        </ul>
      </ContentPosition>
    </Container>
  );
}

{
  /*  */
}
{
  /* <ul class="friend-list">
  <!-- Произвольное кол-во FriendListItem -->
</ul> */
}
