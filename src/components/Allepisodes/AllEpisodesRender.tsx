//!librerias
import React from "react";
import { Link } from "react-router-dom";
//!components
//!hooks
//!styles
//!css
//!firebase-
//!funciones
//!variables u otros
import { style } from "./AllEpisodes.services";
//!types

import { EpisodeInterface } from "../../types/GetCharacterAll.services";

export const AllEpisodesRender = ({ dataEpisode, ...props }: any) => {
  return (
    <>
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
    </>
  );
};
