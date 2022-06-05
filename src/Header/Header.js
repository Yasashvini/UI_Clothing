import React, { useState, useEffect } from "react";
import "./Header.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
const Header = () => {
  return (
    <div className="root">
      {/*  <AppBar position="static" className="APP-BAR">
        <Toolbar className="TOOL_BAR">
          <img width="30" alt="logo" src="/favicon.ico" />
          <Typography variant="h5" className="title">
            strokes
          </Typography>
        </Toolbar>
      </AppBar> */}
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          MadeUp
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav w-100 justify-content-center">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                ForMe <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Jeans
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Shirts
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                TShirts
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Trousers
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Joggers
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Shorts
              </a>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto nav-flex-icons" id="icons">
            <li class="nav-item">
              <a class="nav-link ">
                <i class="fa fa-search"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link ">
                <i class="fa fa-shopping-cart"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link ">
                <i class="fa fa-heart-o"></i>
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link ">
                <i class="fas fa-user-alt"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Header;
