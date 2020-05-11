import React, { Component } from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import "../App.css";

const Nav = () => {
  const navStyle = {
    color: "White"
  };
  const navStyle2 = {
    background: "#1DC00C"
  };

  const handleLogout = e => {
    e.preventDefault();
    document.cookie = "loggedIn=false;max-age=60*1000";
    window.location.replace("/");
  };

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <AppBar position="relative" style={navStyle2}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: "1" }}>
          ATX Small Business
        </Typography>
        <ul className="nav-list">
          <li className="nav-list-item">
            <Link to="/" style={navStyle}>
              Listings
            </Link>
          </li>
          {document.cookie == "loggedIn=true" ? (
            <>
              <li className="nav-list-item">
                <Link to="/add" style={navStyle}>
                  Add
                </Link>
              </li>
              <li className="nav-list-item" onClick={handleLogout}>
                <Link to="/" style={navStyle}>
                  Logout
                </Link>
              </li>
            </>
          ) : (
            <li className="nav-list-item">
              <Link to="/login" style={navStyle}>
                Login
              </Link>
            </li>
          )}
        </ul>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
