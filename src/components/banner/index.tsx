import React from "react";
import LoadedImage from "../loadedImage/index";
import CommonBannerImg from "../../assets/images/Common/banner.jpg";

import "./styles.scss";
import LinearScaleIcon from "@mui/icons-material/LinearScale";
export default function Banner() {
  return (
    <section
      className="banner"
      style={{ backgroundImage: `url(${LoadedImage(CommonBannerImg)})` }}
    >
      <h2 className="banner__title">Food</h2>
      <div className="banner__paths">
        <span className="banner__path">Home</span>
        <LinearScaleIcon />
        <span className="banner__path">Shop</span>
        <LinearScaleIcon />
        <span className="banner__path active">Food</span>
      </div>
    </section>
  );
}
