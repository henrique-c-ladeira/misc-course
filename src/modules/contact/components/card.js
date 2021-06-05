import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, BioText, Container, ImageContainer, Text } from '../styles';
import { ActivityIndicator } from '../../../utils/components/activity-indicator';

const Card = ({ name, avatar, bio, loading, error }) => (
  <Container>
    {loading ? (
      <ActivityIndicator />
    ) : (
      <>
        <Text>{name}</Text>
        <ImageContainer>
          <Avatar src={avatar} />
        </ImageContainer>
        {error ? <BioText error={error}>Ops! Ocorreu um erro...</BioText> : null}
        <BioText>{bio}</BioText>
      </>
    )}
  </Container>
);

Card.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  bio: PropTypes.string,
  loading: PropTypes.bool,
  error: PropTypes.bool,
};

Card.defaultProps = {
  name: 'Noname',
  avatar: '',
  bio: '',
  loading: false,
  error: false,
};

export default Card;
