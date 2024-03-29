//!librerias
import React, { FC } from "react";

import {
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

//!components

import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";

//!hooks
//!styles
//!css
//!firebase-
//!funciones
//!variables u otros
//!types

interface ShareViewInterface {
  url: string;
}

export const ModalShare: FC<ShareViewInterface> = ({ url, ...props }) => {
  return (
    <div className="flex flex-col justify-center items-center bg-white rounded-lg p-1 absolute top-0 left-8 right-3 bottom-0 m-auto w-40 h-full z-50 ">
      <div className="">
        <FacebookShareButton url={url} quote="Facebook" className="m-1">
          <FacebookRoundedIcon color="primary" />
        </FacebookShareButton>
        <TwitterShareButton
          url={url}
          title="Twitter"
          className="m-1"
          hashtags={["reactjs", "react"]}
        >
          <TwitterIcon color="primary" />
        </TwitterShareButton>
        <TelegramShareButton url={url} title="Telegram" className="m-1">
          <TelegramIcon color="primary" />
        </TelegramShareButton>
        <WhatsappShareButton url={url} className="m-1" title="WhatsApp">
          <WhatsAppIcon color="primary" />
        </WhatsappShareButton>
      </div>
    </div>
  );
};
