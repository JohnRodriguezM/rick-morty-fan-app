import React, { useState, useEffect,Suspense } from "react";

const clasesStore = {
  number1:
    "flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6",
  number2: "flex flex-1 justify-between sm:hidden",
  number3:
    "relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50",
  number4:
    "relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50",
  number5: "hidden sm:flex sm:flex-1 sm:items-center sm:justify-between",
  number6: "isolate inline-flex -space-x-px rounded-md shadow-sm",
  number7:
    "relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20",
  number8:
    "relative z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20",
  number9:
    "relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20",
};

export const ViewEpisodes = () => {
  const [data, setData] = useState<any>(null);

  const [pagination, setPagination] = useState(1);

  useEffect(() => {
    if (pagination === 0 || pagination > 3) return setPagination(1);

    fetch(`https://rickandmortyapi.com/api/episode?page=${pagination}`)
      .then((res) => {
        console.log(res);
        return res.json();
        
      })
      .then((data) => {
        console.log(data);
        setTimeout(() => {
          setData(data.results);
        }, 4000);
      });
  }, [pagination]);

  const style = {
    display: "grid",
    gridTemplateColumns: `repeat(
      auto-fit,
      minmax(200px, 1fr)
    )`,
    gridGap: "1rem",
    border: "1px solid #ccc",
  };

  return (
    <Suspense fallback={<h1>Loading posts...</h1>}>
    <div style={{ maxWidth: " 1200px ", margin: "25px auto" }}>
      <h2>pagina actual {pagination}</h2>
      {data &&
        data.map((el: any) => {
          /* console.log(data);*/
          const { id, name, air_date, episode } = el;
          return (
            <div key={id} style={style}>
              <h1>{name}</h1>
              <p>{air_date}</p>
              <p>{episode}</p>
            </div>
          );
        })}

      <div className={clasesStore.number1}>
        <div className={clasesStore.number2}>
          <a
            href="#s"
            className={clasesStore.number3}
            onClick={() => setPagination(pagination - 1)}
          >
            Previous
          </a>
          <a
            href="#a"
            className={clasesStore.number4}
            onClick={() => setPagination(pagination + 1)}
          >
            Next
          </a>
        </div>
        <div className={clasesStore.number5}>
          <div>
            <nav className={clasesStore.number6} aria-label="Pagination">
              {/* <a href="#w" className={clasesStore.number7}>
                <span className="sr-only">----</span>
              </a>*/}
              <a
                href="#x"
                aria-current="page"
                className={clasesStore.number8}
                onClick={() => setPagination(1)}
              >
                1
              </a>
              <a
                href="#y"
                className={clasesStore.number8}
                onClick={() => setPagination(2)}
              >
                2
              </a>
              <a
                href="#z"
                className={clasesStore.number8}
                onClick={() => setPagination(3)}
              >
                3
              </a>

              {/* <a
                href="#c"
                className={clasesStore.number9}
                onClick={() => {setPagination(pagination + 1)}}
              >
                ---
                <span
                  className="sr-only"
                  onClick={() => setPagination(4)}
                >
                  Next
                </span>
              </a>*/}
            </nav>
          </div>
        </div>
      </div>
    </div>
    
    </Suspense>
  );
};
