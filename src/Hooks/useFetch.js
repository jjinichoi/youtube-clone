import { useEffect, useState } from 'react';

const useFetch = url => {
  const [getData, setGetData] = useState();

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setGetData(data))
      .catch(error => console.error(error));
  }, [url]);

  return { getData };
};

export default useFetch;
