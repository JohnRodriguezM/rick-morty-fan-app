//!librerias

import React, {
  useState,
  useEffect,
  FC,
  lazy,
  Suspense,
  useReducer,
} from "react";
import axios from "axios";

//!components

import { Loader } from "../../atomos/Loader/Loader";

//!hooks
//!styles
//!firebase-
//!funciones
//!variables u otros

import { clasesStore } from "./AllEpisodes.services";

//!types

import { EpisodeInterface } from "../../types/GetCharacterAll.services";

//!lazy loading components
const AllEpisodesRender = lazy(() =>
  import("./AllEpisodesRender").then((module) => ({
    default: module.AllEpisodesRender,
  }))
);

//!USE REDUCER SPACE FOR WORK
export const initialPage = { page: 1 };
const reducer = (state: any, { type, payload }: any) => {
  switch (type) {
    case "NextPage":
      return { page: state.page + payload };
    case "PreviousPage":
      return { page: state.page - payload };
    case "specificPage":
      return { page: payload };
    case "restarPagination":
      return { page: (state.page = 1) };
  }
  return state;
};

//!

export const ViewEpisodes: FC = ({ ...props }) => {
  const [dataEpisode, setDataEpisode] = useState<EpisodeInterface[]>([]);

  //!USE REDUCER SPACE TO WORK
  //!
  const [{ page }, dispatch] = useReducer(reducer, initialPage);

  const nextPage = () => dispatch({ type: "NextPage", payload: 1 });
  const previousPage = () => dispatch({ type: "PreviousPage", payload: 1 });
  const specificPage = (value: number) => dispatch({ type: "specificPage", payload: value });

  useEffect(() => {
    if (page === 0 || page > 3) return dispatch({ type: "restarPagination" });
    const getEpisodes = async (url: string) => {
      try {
        axios.get(url).then(({ data: { results } }: any) => {
          setDataEpisode(results);
        });
      } catch (error) {
        console.log(error);
      }
    };
    getEpisodes(`https://rickandmortyapi.com/api/episode?page=${page}`);
  }, [page]);

  //!
  //!
  return (
    <>
      <section className="w-11/12 max-w-6xl my-12 mx-auto text-gray-900 bg-white rounded-3xl shadow-xl">
        <div className={clasesStore.number1}>
          <div className={clasesStore.number2}>
            <a
              href={`#${page}`}
              className={clasesStore.number3}
              onClick={previousPage}
            >
              Previous
            </a>
            <p className="mt-1 ml-1">
              Actual page: <b>{page}</b>
            </p>
            <a
              href={`#${page}`}
              className={clasesStore.number4}
              onClick={nextPage}
            >
              Nextt
            </a>
          </div>
          <div className={clasesStore.number5}>
            <div>
              <nav className={clasesStore.number6} aria-label="Pagination">
                <a
                  href={`#${page}`}
                  aria-current="page"
                  className={clasesStore.number8}
                  onClick={() => specificPage(1)}
                >
                  1
                </a>
                <a
                  href={`#${page}`}
                  className={clasesStore.number8}
                  onClick={() => specificPage(2)}
                >
                  2
                </a>
                <a
                  href={`#${page}`}
                  className={clasesStore.number8}
                  onClick={() => specificPage(3)}
                >
                  3
                </a>
                <p className="mt-1 pl-4">
                  Actual page: <b>{page}</b>
                </p>
              </nav>
            </div>
          </div>
        </div>
        <Suspense fallback={<Loader />}>
          <AllEpisodesRender dataEpisode={dataEpisode} />
        </Suspense>
      </section>
      <br />
    </>
  );
};
