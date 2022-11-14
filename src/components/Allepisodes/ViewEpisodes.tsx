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

//!reducers

import {
  reducerPage,
  initialPage,
} from "./reducerFolder/reducers/page.reducers";

import { PageActions } from "./reducerFolder/actions/page.actions";

//!lazy loading components
const AllEpisodesRender = lazy(() =>
  import("./AllEpisodesRender").then((module) => ({
    default: module.AllEpisodesRender,
  }))
);

export const ViewEpisodes: FC = ({ ...props }) => {
  const [dataEpisode, setDataEpisode] = useState<EpisodeInterface[]>([]);

  //!USE REDUCER SPACE TO WORK
  //!
  const [{ page }, dispatch] = useReducer(reducerPage, initialPage);

  const { reset, nextPage, previousPage, specificPage } = new PageActions(
    dispatch
  );

  useEffect(() => {
    if (page === 0 || page > 3) return reset();
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
              Next
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
