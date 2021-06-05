import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { asyncGetUser } from '../../store/ducks/user';

export const useGitHub = (user) => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      dispatch(asyncGetUser(user));
    })();
  }, []);
};
