import axios from 'axios';
import { useEffect, useState } from 'react';

export const useGitHub = (user) => {
  const [response, setReponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`https://api.github.com/users/${user}`);
        setReponse(data);
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    })();
  }, []);

  return [response, error, isLoading];
};
