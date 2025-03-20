import { Box } from "@mui/system";
import React, { useState } from "react";

const DarkMode = () => {
  const [mode, setMode] = useState(true);

  return (
    <Box
      style={{
        backgroundColor: mode ? "white" : "black",
        color: mode ? "black" : "white",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <h2 style={{ marginTop: "0px" }}>This is Dark & Light mode Task</h2>
      {mode ? (
        <button type="button" onClick={() => setMode(false)}>
          Black
        </button>
      ) : (
        <button type="button" onClick={() => setMode(true)}>
          White
        </button>
      )}
    </Box>
  );
};

export default DarkMode;
