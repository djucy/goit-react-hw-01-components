import PropTypes from 'prop-types';
import Profile from './Profile';
import {
  Container,
  ContentPosition,
  Section,
} from '../CommonStyle/Container.styled';
import { ProfileStyle } from './Profile.styled';

export default function ProfilesList({ items }) {
  return (
    <Container>
      <Section>
        <ContentPosition>
          <ProfileStyle>
            {items.map(item => (
              <li key={item.tag}>
                <Profile
                  avatar={item.avatar}
                  username={item.username}
                  tag={item.tag}
                  location={item.location}
                  stats={item.stats}
                />
              </li>
            ))}
          </ProfileStyle>
        </ContentPosition>
      </Section>
    </Container>
  );
}

ProfilesList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape
  )
}