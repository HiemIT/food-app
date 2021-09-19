import Container from "@mui/material/Container";

import React from "react";
import Banner from "../../components/banner";
import ShopContent from "./components/shopContent";
import ShopFilters from "./components/shopFilters/index";

import "./styles.scss";

export default function Shop() {
  return (
    <section className="shop">
      <Banner />
      <Container>
        <div className="shop__container">
          <ShopFilters />
          <ShopContent />
        </div>
      </Container>
    </section>
  );
}
