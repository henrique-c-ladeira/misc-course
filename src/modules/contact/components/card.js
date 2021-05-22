import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, BioText, Container, Text } from '../styles';

const Card = ({ name, avatar, bio }) => (
  <Container>
    <Text>{name}</Text>
    <Avatar src={avatar} />
    <BioText>{bio}</BioText>
  </Container>
);

Card.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  bio: PropTypes.string,
};

Card.defaultProps = {
  name: 'Noname',
  avatar: '',
  bio: '',
};

export default Card;
