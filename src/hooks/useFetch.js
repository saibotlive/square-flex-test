import { useState, useEffect } from 'react';

export default url => {
  const [data, setData] = useState([]);

  const getData = async url => {
    const res = await fetch(url);
    const json = await res.json();

    setData(json);
  };

  useEffect(() => {
    getData(url);
  }, []);

  return data;
};
