import { Container } from "@material-ui/core";
import React from "react";

import HomeIcon from "@mui/icons-material/Home";

import logo from "./../../assets/svgs/Common/logo.svg";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import { LibraryBooks, StoreMallDirectory } from "@mui/icons-material";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Avatar from "@mui/material/Avatar";

import "./styles.scss";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));
const Header = () => {
  return (
    <>
      <header className="navbar active">
        <Container>
          <div className="navbar__container checkout">
            {/**
             * Logo
             * desktop */}

            <div className="navbar__link">
              <img src={logo} alt="logo HM food" className="navbar__logo" />
            </div>

            <div className="navbar--left">
              <ul className="navbar__list">
                <li className="navbar__item">
                  <HomeIcon />
                  Pages
                </li>
                <li className="navbar__item">
                  <RestaurantMenuIcon />
                  Order oline
                </li>
                <li className="navbar__item">
                  <LibraryBooks />
                  News
                </li>
                <li className="navbar__item">
                  <StoreMallDirectory />
                  Store Locations
                </li>
              </ul>
            </div>

            <div className="navbar--right">
              <div className="navbar__cart">
                <IconButton aria-label="cart">
                  <StyledBadge badgeContent={4} color="secondary">
                    <ShoppingCartIcon className="navbar__cart--icon" />
                  </StyledBadge>
                </IconButton>
              </div>

              <div className="navbar__account">
                <Avatar />
                <div className="navbar__username navbar__username--signed-out">
                  Y hiem kbuor
                </div>
              </div>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
