//!librerias

import React, { useState, useEffect, FC, Suspense } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

//!components
//!hooks
//!styles
//!firebase-
//!funciones
//!variables u otros

import { clasesStore, style } from "./AllEpisodes.services";

//!types

import { EpisodeInterface } from "../../types/GetCharacterAll.services";

export const ViewEpisodes: FC = ({ ...props }) => {
  const [dataEpisode, setDataEpisode] = useState<EpisodeInterface[]>([]);
  const [pagination, setPagination] = useState<number>(1);

  useEffect(() => {
    if (pagination === 0 || pagination > 3) return setPagination(1);
    const getEpisodes = async (url:string) => {
      try {
        axios
          .get(url)
          .then(({ data: { results } }: any) => {
            setDataEpisode(results);
          });
      } catch (error) {
        console.log(error);
      }
    };
    getEpisodes(`https://rickandmortyapi.com/api/episode?page=${pagination}`);
  }, [pagination]);

  return (
    <>
      <section className="w-11/12 max-w-6xl my-12 mx-auto text-gray-900 bg-white rounded-3xl shadow-xl">
        <div className={clasesStore.number1}>
          <div className={clasesStore.number2}>
            <a
              href={`#${pagination}`}
              className={clasesStore.number3}
              onClick={() => setPagination(pagination - 1)}
            >
              Previous
            </a>
            <p className="mt-1 ml-1">
              Actual page: <b>{pagination}</b>
            </p>
            <a
              href={`#${pagination}`}
              className={clasesStore.number4}
              onClick={() => setPagination(pagination + 1)}
            >
              Next
            </a>
          </div>
          <div className={clasesStore.number5}>
            <div>
              <nav className={clasesStore.number6} aria-label="Pagination">
                <a
                  href={`#${pagination}`}
                  aria-current="page"
                  className={clasesStore.number8}
                  onClick={() => setPagination(1)}
                >
                  1
                </a>
                <a
                  href={`#${pagination}`}
                  className={clasesStore.number8}
                  onClick={() => setPagination(2)}
                >
                  2
                </a>
                <a
                  href={`#${pagination}`}
                  className={clasesStore.number8}
                  onClick={() => setPagination(3)}
                >
                  3
                </a>
                <p className="mt-1 pl-4">
                  Actual page: <b>{pagination}</b>
                </p>
              </nav>
            </div>
          </div>
        </div>
        {dataEpisode &&
          dataEpisode.map((el: EpisodeInterface) => {
            const { id, name, air_date, episode } = el;
            return (
              <div key={id} style={style} className="p-2">
                <Link
                  className="bg-indigo-900 rounded-md hover:scale-105 sm:shadow-md p-1 text-white"
                  to={`episode/${id}`}
                >
                  {name}
                </Link>
                <p>Air date: {air_date}</p>
                <p>Season: {episode}</p>
              </div>
            );
          })}
      </section>
      <br />
    </>
  );
};
