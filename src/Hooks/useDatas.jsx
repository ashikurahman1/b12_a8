import { useEffect, useState } from 'react';

export const useDatas = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch('/allAppsData.json').then(res =>
      res.json().then(data => setDatas(data))
    );
  }, []);
  return [datas];
};
