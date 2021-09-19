import SearchIcon from "@mui/icons-material/Search";

import React from "react";
import IconButton from "@mui/material/IconButton";
import "./styles.scss";
import ViewListIcon from "@mui/icons-material/ViewList";
import { ExpandMore, ViewModule } from "@mui/icons-material";

import "../../../components/shopContent/shopHandle/styles.scss";

const ShopHandle = () => {
  return (
    <div className="shop-handle">
      <form className="shop-handle__search">
        <input type="text" placeholder="Search your product" />
        <IconButton className="shop-handle__search-btn">
          <SearchIcon />
        </IconButton>
      </form>

      <div className="shop-handle__drop">
        <div className="shop-handle__drop-current">
          <span>Rate: Low to Hight</span>
          <ExpandMore />
        </div>

        <ul className="shop-handle__drop-list drop">
          <li className="shop-handle__drop-item">Rate: Low to Hight</li>
          <li className="shop-handle__drop-item">Rate: Low to Hight</li>
          <li className="shop-handle__drop-item">Rate: Low to Hight</li>
          <li className="shop-handle__drop-item">Rate: Low to Hight</li>
        </ul>
      </div>

      <div className="shop-handle__display-types">
        <ViewModule className="shop-handle__display-types active" />
        <ViewListIcon />
      </div>
    </div>
  );
};

export default ShopHandle;
