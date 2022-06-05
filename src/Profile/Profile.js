import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import "./Profile.css";
import { Typography } from "@material-ui/core";
const Profile = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={11} className="orderTitle">
        <Typography className="orderTitle">My Profile</Typography>
      </Grid>
      <Grid item xs={11} className="orderTitle">
        <Grid container spacing={2}>
          <Grid item xs={6} className="orderTitle">
            <input
              type="text"
              class="form-control"
              aria-describedby="emailHelp"
              placeholder="First Name"
            />
          </Grid>
          <Grid item xs={6} className="orderTitle">
            <input
              type="text"
              class="form-control"
              aria-describedby="emailHelp"
              placeholder="Last Name"
            />
          </Grid>
          <Grid item xs={12} className="orderTitle">
            <input
              type="text"
              class="form-control"
              aria-describedby="emailHelp"
              placeholder="Email"
            />
          </Grid>
          <Grid item xs={12} className="orderTitle">
            <input
              type="text"
              class="form-control"
              aria-describedby="emailHelp"
              placeholder="Phone Number"
            />
          </Grid>
          <Grid item xs={12} className="orderTitle">
            <input
              type="password"
              class="form-control"
              aria-describedby="emailHelp"
              placeholder="Password"
            />
          </Grid>
          <Grid item xs={12} className="orderTitle">
            <input
              type="password"
              class="form-control"
              aria-describedby="emailHelp"
              placeholder="Confirm Password"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        xs={11}
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "2%",
        }}
      >
        <Button
          variant="contained"
          disableElevation
          style={{ backgroundColor: "black" }}
        >
          ADD NEW ADDRESS
        </Button>
      </Grid>
    </Grid>
  );
};
export default Profile;
