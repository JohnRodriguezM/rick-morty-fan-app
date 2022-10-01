export const fetchData = async (
  url: string,
  setD: Function = () => {},
  setD2: Function = () => {}
) => {
  try {
    const res = await fetch(url);
    const { results,info } = await res.json();
    console.log(info);
    setD(results);
    setD2(results);
  } catch (err) {
    console.log(err);
  }
};
