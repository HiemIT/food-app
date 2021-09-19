import React from "react";
import Container from "@mui/material/Container";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotFoundImg from "../../assets/svgs/NotFound/404.svg";

import "./styles.scss";
import { useHistory } from "react-router";

const NotFound = () => {
  const history = useHistory();

  const backToHome = () => {};

  return (
    <>
      <Container>
        <div className="not-found">
          <span className="not-found__caption">404</span>
          <h2 className="not-found__heading">Opps...Page not found</h2>
          <div className="not-found__img">
            <img src={NotFoundImg} alt="Not found" />
          </div>
          <div className="not-found__back">
            <ChevronLeftIcon />
            <span>Back to home page</span>
          </div>
        </div>
      </Container>
    </>
  );
};

export default NotFound;
