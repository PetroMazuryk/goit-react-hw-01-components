import PropTypes from 'prop-types';
import { BsEmojiSmileFill } from 'react-icons/bs';
import { BsFillHandThumbsUpFill } from 'react-icons/bs';
import {
  Container,
  Image,
  FriendsName,
  FriendsIcon,
} from './FriendsList.styled';

export const FriendsList = ({ item: { avatar, name, isOnline } }) => {
  return (
    <Container status={isOnline}>
      <BsEmojiSmileFill size={25} />

      <Image src={avatar} alt={name} />

      <FriendsName>{name}</FriendsName>
      <FriendsIcon>
        <BsFillHandThumbsUpFill size={35} />
      </FriendsIcon>
    </Container>
  );
};

FriendsList.propTypes = {
  item: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
