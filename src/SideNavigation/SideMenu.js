import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Typography } from "@material-ui/core";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Divider from "@mui/material/Divider";
import "./SideMenu.css";
import Orders from "../Orders/Orders";
import Profile from "../Profile/Profile";
const SideMenu = () => {
  const [sideOptions, setSideOptions] = useState([
    { title: "My Profile", subTitle: "Notifications, password " },
    { title: "My orders", subTitle: "Already have 12 orders" },
    { title: "Shipping addresses", subTitle: "3 addresses" },
  ]);
  const [selectedOption, setSelectedOption] = useState(0);
  return (
    <Grid container spacing={3} style={{ marginTop: "3vh" }}>
      <Grid item xs={4}>
        <Stack direction="row" spacing={2}>
          <Avatar
            alt="Remy Sharp"
            src={"./image 1.svg"}
            sx={{ width: 72, height: 72, marginLeft: "5vw" }}
          />
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
          >
            <Typography className="username">Grishk</Typography>
            <Typography className="email">griiskaim@gmail.com</Typography>
          </Stack>
        </Stack>
        <List style={{ marginLeft: "5vw" }}>
          {sideOptions.map(({ title, subTitle }, index) => (
            <div>
              <ListItem
                button
                key={index}
                secondaryAction={
                  <IconButton edge="end" aria-label="delete">
                    <ArrowForwardIosIcon />
                  </IconButton>
                }
                style={{ width: "70%" }}
                onClick={() => setSelectedOption(index)}
              >
                <ListItemText primary={title} secondary={subTitle} />
              </ListItem>
              {selectedOption == index ? (
                <Divider style={{ background: "black" }} />
              ) : (
                ""
              )}
            </div>
          ))}
        </List>
      </Grid>

      <Grid item xs={7} style={{ border: "1px solid #333333" }}>
        {selectedOption == 0 ? (
          <Profile />
        ) : selectedOption == 1 ? (
          <Orders />
        ) : (
          ""
        )}
      </Grid>
    </Grid>
  );
};
export default SideMenu;
