export const fetchData = async (url: string, setD: Function) => {
  try {
    const res = await fetch(url);
    const json = await res.json();
    setD(json);
  } catch (err) {
    console.log(err);
  }
};
