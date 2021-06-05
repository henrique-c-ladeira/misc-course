import React from 'react';
import { useSelector } from 'react-redux';
import { useGitHub } from '../../utils/helpers/useGitHub';
import { Card } from '../../utils/components/card';
import { Header } from '../../utils/components/header/header';
// import PropTypes from 'prop-types';

const Home = () => {
  const userState = useSelector((state) => state.user);
  useGitHub('henrique-c-ladeira');
  return (
    <>
      <Header title={userState.user?.login} />
      <Card
        error={userState.error}
        loading={userState.isLoading}
        bio={userState.user?.bio}
        avatar={userState.user?.avatar_url}
      />
    </>
  );
};
// Home.propTypes = {};

export default Home;
