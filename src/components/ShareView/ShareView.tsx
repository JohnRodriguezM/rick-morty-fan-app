//? iconos del share
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";

import {
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";


//!material ui
import IconButton, { IconButtonProps } from "@mui/material/IconButton";


export const ModalShare = (props: any) => {
  return (
    <div
      style={{
        /* backgroundColor: "rgb(210, 152, 239)",*/
        position: "absolute",
        top: "0",
        left: "45px",
        right: "15px",
        bottom: "0",
        margin: "auto",
        width: "150px",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div className="">
        <FacebookShareButton url={props.url} quote="Facebook" className="m-1">

          <FacebookRoundedIcon color="primary" />

        </FacebookShareButton>
        <TwitterShareButton
          url={props.url}
          title="Twitter"
          className="m-1"
          hashtags={["reactjs", "react"]}
        >
      

          <TwitterIcon color="primary" />


        </TwitterShareButton>
        <TelegramShareButton url={props.url} title="Telegram" className="m-1">
          <TelegramIcon color="primary" />
        </TelegramShareButton>
        <WhatsappShareButton url={props.url} className="m-1" title="WhatsApp">
          <WhatsAppIcon color="primary" />
        </WhatsappShareButton>
      </div>
    </div>
  );
};
