import React from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import StarIcon from "@mui/icons-material/Star";
import RoomIcon from "@mui/icons-material/Room";
import "./styles.scss";
import { FavoriteBorder, ShoppingCartOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const ShopProduct = () => {
  return (
    <div className="shop-product">
      <div className="shop-product__img-wrapper">
        <LazyLoadImage
          effect="blur"
          src="https://goldbelly.imgix.net/uploads/showcase_media_asset/image/137148/Gramercy-Tavern-Burger-and-Kielbasa-Kit-6.4.21-72ppi-1x1-15.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1"
          className="shop-product__img"
          alt=""
          width="100%"
          height="100%"
        />
        <div className="shop-product__rate">
          <StarIcon />
          <span>5</span>
        </div>
      </div>

      <div className="shop-product__content">
        <strong className="shop-product__name">Gramercy Tavern</strong>
        <p className="shop-product__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          saepe nostrum quaerat nemo, fuga repellat exercitationem omnis
          similique est dolorem totam provident?
        </p>
        <div className="shop-product__row">
          <div className="shop-product__location">
            <RoomIcon />
            <span>Ho Chi Minh</span>
          </div>
          <div className="shop-product__price">$2</div>
        </div>

        <div className="shop-product__actions">
          <div className="shop-product__btn ">
            <FavoriteBorder />
          </div>
          <div className="shop-product__btn ">
            <ShoppingCartOutlined />
          </div>
        </div>
      </div>
      <div className="shop-product__label">Favourite</div>
    </div>
  );
};

export default ShopProduct;
