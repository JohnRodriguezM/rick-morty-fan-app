import { useState, useEffect } from "react";

export const useFetch = (url: string): any => {
 /* const [data, setData] = useState<any>();
  const [loading, setLoading] = useState<any>(null);
  const [error, setError] = useState<any>(null);

  useEffect(
    function () {
      const fetchData = async () => {
        setLoading(true);
        try {
          const res = await fetch(url);
          const datos = res.json();
          setData(datos);
          setLoading(false);
        } catch (err) {
          console.log(err);
          setError(err);
        }
      };
      fetchData();
      return [ ...data, loading ];
    },
    [url]
  );*/
};
