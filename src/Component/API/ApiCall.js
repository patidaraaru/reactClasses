import React, { useEffect, useState } from "react";
import { Card, CardContent, CardMedia, Box, Typography } from "@mui/material";

const ApiCall = () => {
  const [user, setUser] = useState([]);

  const ApiDataHandle = () => {
    fetch("https://fakestoreapi.com/products/1")
      .then((res) => res.json())
      .then((json) => setUser(json));
  };

  useEffect(() => ApiDataHandle(), []);
  console.log(user);

  return (
    <Box justifyContent="center">
      <Card sx={{ borderRadius: 2, boxShadow: 3, maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="200"
          image={user.image}
          alt={user.category}
        />
        <CardContent>
          <Typography variant="subtitle2" color="text.secondary">
            ID: {user.id} | {user.category}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            {user.description}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <Typography variant="body1" color="primary">
              ⭐ {user.rating?.rate} | {user.rating?.count}
            </Typography>
            <Typography variant="h6" color="secondary">
              ${user.price}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ApiCall;
