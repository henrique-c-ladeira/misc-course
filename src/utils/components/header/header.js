import React from 'react';
import PropTypes from 'prop-types';
import { Container, Title } from './header.styled';
import { GitCat } from '../gitcat';

export const Header = ({ title }) => (
  <Container>
    <GitCat />
    <Title>{title}</Title>
  </Container>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
