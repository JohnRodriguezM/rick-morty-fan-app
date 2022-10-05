//? iconos del share
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";

import {
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

export const ModalShare = (props: any) => {
  return (
    <div
      style={{
        backgroundColor: "rgb(210, 152, 239)",
        position: "absolute",
        top: "-55px",
        left: "-35px",
        width: "320px",
        height: "100%",
        /*background: "rgba(0,0,0,0.5)",*/
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div className="">
        <FacebookShareButton url={props.url} quote="Facebook" className="m-2">
          <FacebookIcon color="primary" />
        </FacebookShareButton>
        <TwitterShareButton
          url={props.url}
          title="Twitter"
          className="m-2"
          hashtags={["reactjs", "react"]}
        >
          <TwitterIcon color="primary" />
        </TwitterShareButton>
        <TelegramShareButton url={props.url} title="Telegram">
          <TelegramIcon
          color="primary"
          />
        </TelegramShareButton>
        <WhatsappShareButton url={props.url} title="WhatsApp">
          <WhatsAppIcon color="primary" />
        </WhatsappShareButton>
      </div>
    </div>
  );
};