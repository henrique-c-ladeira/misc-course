import React from 'react';
import { useGitHub } from '../../utils/helpers/useGitHub';
import Card from './components/card';
// import PropTypes from 'prop-types';

const Contact = () => {
  const [response, loading, error] = useGitHub('henrique-c-ladeira');

  return (
    <Card error={error} loading={loading} bio={response?.bio} name={response?.login} avatar={response?.avatar_url} />
  );
};

// Contact.propTypes = {};

export default Contact;
