import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./Orders.css";
import { Typography } from "@material-ui/core";
import { Divider } from "@mui/material";
const Orders = () => {
  const [orders, setOrders] = useState([
    {
      orderId: "12345678",
      productName: "Madeup White Cotton Blend Checkered Slim Fit Shirt",
      deliveryDate: "Sat, Aug 30",
      price: "1299",
      delivered: true,
    },
    {
      orderId: "12345679",
      productName: "Madeup Black Cotton Blend Checkered Slim Fit Shirt",
      deliveryDate: "Sat, Aug 31",
      price: "1299",
      delivered: true,
    },
    {
      orderId: "12345680",
      productName: "Madeup White Jute Blend Checkered Slim Fit Shirt",
      deliveryDate: "Sat, Aug 16",
      price: "1299",
      delivered: false,
    },
    {
      orderId: "12345681",
      productName: "Madeup White Banaras Blend Checkered Slim Fit Shirt",
      deliveryDate: "Sat, Aug 15",
      price: "1299",
      delivered: false,
    },
  ]);
  return (
    <Grid container>
      <Grid item xs={11} className="orderTitle">
        My Orders
      </Grid>
      <Grid item xs={11}>
        <List>
          {orders.map(
            (
              { orderId, productName, deliveryDate, price, delivered },
              index
            ) => (
              <div>
                <ListItem button key={index}>
                  <Grid container spacing={2}>
                    <Grid item xs={2}>
                      <img
                        src={"./Rectangle 6.svg"}
                        style={{
                          width: "80px",
                          height: "80px",

                          border: "10px solid #DDDDDD",
                        }}
                      ></img>
                    </Grid>

                    <Grid item xs={4}>
                      <Typography className="orderId">
                        {"Order #" + orderId}
                      </Typography>
                      <ListItemText
                        primary={productName}
                        secondary={"Express Delivery by " + deliveryDate}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="flex-end"
                        spacing={1}
                      >
                        <Grid item>
                          <Typography className="orderId">
                            {"Credit Card Payment"}
                          </Typography>
                        </Grid>
                        <Grid>
                          <Typography className="price">
                            {"Rs " + price}
                          </Typography>
                        </Grid>
                        <Grid>
                          <KeyboardArrowDownIcon />
                        </Grid>
                        <Grid>
                          <Typography
                            id={delivered == false ? "pending" : "delivered"}
                            style={{ padding: "2px 16px 2px 16px" }}
                          >
                            {delivered == false ? "Pending" : "Delivered"}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </ListItem>
                <Divider />
              </div>
            )
          )}
        </List>
      </Grid>
    </Grid>
  );
};

export default Orders;
