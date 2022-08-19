import { useState, useEffect } from "react";


export function useFetch(url: string): any {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState<any>(false);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error('se ha producido un error');
        }
        const json = await res.json();
        setLoading(true)
        setTimeout(() =>{
          setData(json);
          /*setLoading(false)*/
        },1500)
      } catch (error: any) {
        /*console.log(error)*/
        setError(error);
      }
    };
    fetchData();
  },[url]);

  return [data, loading, error, setData];
}
