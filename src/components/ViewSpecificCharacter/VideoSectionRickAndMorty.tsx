import React, {FC} from "react";


export const VideoSectionRickAndMorty: FC = ({...props }: any) => {
  return (
    <section className="my-0 mx-auto">
      <iframe
        className=" w-64 h-96  md:w-96 md:h-96 my-1 mx-auto container"
        src="https://www.youtube.com/embed/Tm7dFM_v57A"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </section>
  );
};


/*

.container{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 1rem;
}

*/