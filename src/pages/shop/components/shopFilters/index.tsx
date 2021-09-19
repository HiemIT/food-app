import React from "react";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import {
  Bread,
  Burger,
  Drinks,
  Pizza,
  Sandwich,
} from "../../../../utils/shopSVG";

import "./styles.scss";

const ShopFilters = () => {
  return (
    <div className="shop-filters">
      <h2 className="shop-filters__title">Popular</h2>
      <ul className="shop-filters__list">
        <li className="shop-filters__item active">
          <img src={Bread} alt="Bread" />
          <span className="shop-filters__item-name">Break</span>
        </li>
        <li className="shop-filters__item ">
          <img src={Burger} alt="Bread" />
          <span className="shop-filters__item-name">Burger</span>
        </li>
        <li className="shop-filters__item ">
          <img src={Drinks} alt="Bread" />
          <span className="shop-filters__item-name">Drinks</span>
        </li>
        <li className="shop-filters__item ">
          <img src={Pizza} alt="Bread" />
          <span className="shop-filters__item-name">Pizza</span>
        </li>
        <li className="shop-filters__item">
          <img src={Sandwich} alt="Bread" />
          <span className="shop-filters__item-name">Sandwich</span>
        </li>
      </ul>
      <h2 className="shop-filters__title">Price</h2>
      <form className="shop-filters__form">
        <label className="checkbox">
          <input
            className="checkbox__input"
            type="radio"
            name="Radio"
            value=""
          />
          <span className="checkmark"></span>
          $50 to $100
        </label>

        <label className="checkbox">
          <input
            className="checkbox__input"
            type="radio"
            name="Radio"
            value=""
          />
          <span className="checkmark"></span>
          Under $50
        </label>

        <label className="checkbox">
          <input
            className="checkbox__input"
            type="radio"
            name="Radio"
            value=""
          />
          <span className="checkmark"></span>
          $Above $10
        </label>
      </form>
      <h2 className="shop-filters__title">Rate</h2>
      <div className="shop-filters__stars">
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <span>& up</span>
      </div>
      <div className="shop-filters__stars">
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarBorderIcon />
        <span>& up</span>
      </div>
      <div className="shop-filters__stars">
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarBorderIcon />
        <StarBorderIcon />
        <span>& up</span>
      </div>
    </div>
  );
};

export default ShopFilters;
