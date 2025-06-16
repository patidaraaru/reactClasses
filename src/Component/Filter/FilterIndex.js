import React, { useState } from "react";
import FilterData from "./FilterData";
import { Grid } from "@mui/system";
import { Card } from "react-bootstrap";
import { CardContent, CardMedia, Input, Typography } from "@mui/material";

const FilterIndex = () => {
  const [proValue, setProValue] = useState([]);
  const HandleChange = (event) => {
    const value = event.target.value;
    let updateData = FilterData.filter(
      (item) => item.category.toUpperCase() === value.toUpperCase()
    );
    setProValue(updateData);
    console.log(proValue);
  };
  return (
    <>
      <Grid container spacing={2} padding={2}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Input
            type="text"
            placeholder="Enter Your Product"
            onChange={(event) => HandleChange(event)}
            name="product"
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} padding={2}>
        {proValue && proValue.length > 0 ? (
          proValue.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item.id || index}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={item.img}
                  alt={item.category}
                />
                <CardContent>
                  <Typography variant="body2">
                    <strong>ID:</strong> {item.id}
                  </Typography>
                  <Typography variant="body2">
                    <strong>Category:</strong> {item.category}
                  </Typography>
                  <Typography variant="body2">
                    <strong>Color:</strong> {item.color}
                  </Typography>
                  <Typography variant="body2">
                    <strong>Price:</strong> ₹{item.price}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Typography variant="h6"> Your Cart Is Empty !</Typography>
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default FilterIndex;
