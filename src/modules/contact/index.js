import React from 'react';
import { ActivityIndicator } from '../../utils/components/activity-indicator';
import { useGitHub } from '../../utils/helpers/useGitHub';
import Card from './components/card';
// import PropTypes from 'prop-types';

const Contact = () => {
  const [response, , loading] = useGitHub('henrique-c-ladeira');

  return (
    <div>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Card bio={response?.bio} name={response?.login} avatar={response?.avatar_url} />
      )}
    </div>
  );
};

// Contact.propTypes = {};

export default Contact;
