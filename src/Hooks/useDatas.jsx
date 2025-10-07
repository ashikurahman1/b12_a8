import axios from 'axios';
import { useEffect, useState } from 'react';

export const useDatas = () => {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios('/allAppsData.json')
      .then(data => setDatas(data.data))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, []);
  return { datas, loading, error };
};
