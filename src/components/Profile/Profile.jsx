import PropTypes from 'prop-types';
import {
  ProfileData,
  ProfileName,
  ProfileContact,
  ProfileStats,
  ProfileStatsLabel,
  ProfileStatsQuantity,
  ProfileCardColor,
  ProfileImage,
} from './Profile.styled';
// import { Container } from '../CommonStyle/Container.styled';

export default function Profile(props) {
  const { avatar, username, tag, location, stats } = props;
  return (
    <ProfileCardColor>
      <ProfileData>
        <ProfileImage
          src={avatar}
          alt="User avatar"
          className="avatar"
          width="200px"
        />

        <ProfileName>{username}</ProfileName>
        <ProfileContact>@{tag}</ProfileContact>
        <ProfileContact>{location}</ProfileContact>
      </ProfileData>

      <ul>
        <ProfileStats>
          <ProfileStatsLabel>Followers</ProfileStatsLabel>
          <ProfileStatsQuantity>{stats.followers}</ProfileStatsQuantity>
        </ProfileStats>
        <ProfileStats>
          <ProfileStatsLabel>Views</ProfileStatsLabel>
          <ProfileStatsQuantity>{stats.views}</ProfileStatsQuantity>
        </ProfileStats>
        <ProfileStats>
          <ProfileStatsLabel>Likes</ProfileStatsLabel>
          <ProfileStatsQuantity>{stats.likes}</ProfileStatsQuantity>
        </ProfileStats>
      </ul>
    </ProfileCardColor>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};

