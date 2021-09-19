import React from "react";
import ShopHandle from "./shopHandle/index";
import ShopPagination from "./shopPagination";
import "./styles.scss";
import { ShopProducts } from "./shopProducts/index";

const ShopContent = () => {
  return (
    <div className="shop-content">
      <ShopHandle />
      <ShopProducts />
      <ShopPagination />
    </div>
  );
};

export default ShopContent;
