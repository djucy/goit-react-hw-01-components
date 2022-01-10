import PropTypes from 'prop-types';
import { Container, ContentPosition, Section } from '../CommonStyle/Container.styled';
import FriendListItem from './FriendListItem';

export default function FriendList({ items }) {
  return (
    <Container>
      <ContentPosition>
        <Section>
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
        </Section>
      </ContentPosition>
    </Container>
  );
}

FriendList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape
  )

}