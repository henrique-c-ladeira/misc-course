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
        setReponse({
          bio: err.message,
          login: 'Error',
          avatar_url:
            'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.phoenixcomputerpro.com%2Fwp-content%2Fuploads%2F2014%2F09%2FPhoenix-Computer-Error-Message.jpg&f=1&nofb=1',
        });
        setError(err);
        setIsLoading(false);
      }
    })();
  }, []);

  return [response, isLoading, error];
};
