import React, { useState, useEffect } from "react";

export const ViewEpisodes = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/episode")
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log(data)
        setData(data.results)});
  }, []);

  const style = {
    display: "grid",
    gridTemplateColumns: `repeat(
      auto-fit,
      minmax(200px, 1fr)
    )`,
    gridGap: "1rem",
  }


  return (
    <div>
      {data &&
        data.map((el: any) => {
          const { id, name, air_date, episode } = el;
          return (
            <div key={id} style = {style}>
              <h1>{name}</h1>
              <p>{air_date}</p>
              <p>{episode}</p>
            </div>
          );
        })}


<div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
  <div className="flex flex-1 justify-between sm:hidden">
    <a href="#s" className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</a>
    <a href="#a" className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</a>
  </div>
  <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
    <div>
      <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
        <a href="#w" className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
          <span className="sr-only">Previous</span>
        </a>
        <a href="#x" aria-current="page" className="relative z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20">1</a>
        <a href="#y" className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">2</a>
        <a href="#z" className="relative hidden items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 md:inline-flex">3</a>
        <a href="#t" className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
          <span className="sr-only">Next</span>
        </a>
      </nav>
    </div>
  </div>
</div>




    </div>
  );
};
