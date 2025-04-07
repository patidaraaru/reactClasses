import React, { useState } from "react";
import { Button } from "react-bootstrap";
import webSeries from "./SeriesData";

const Index = () => {
  const [series, setSeries] = useState();
  const [content, setContent] = useState([]);

  const HandleChange = (event) => {
    setSeries(event.target.value);
  };

  const HandleClick = () => {
    const newData = webSeries.filter(
      (item) => item.name.toLowerCase() === series.toLowerCase()
    );
    setContent(newData);
  };
  const HandleError = (event) => {
    event.target.src = "https://picsum.photos/200/300";
    console.log(event.target.src);
  };

  return (
    <>
      <div>
        <input type="text" onChange={HandleChange} />
        <Button type="button" onClick={HandleClick}>
          Series
        </Button>
      </div>
      <div>
        {content.length > 0 ? (
          content.map((item, index) => (
            <div key={index}>
              <span>{item.name}</span>
              <img
                src={item.image}
                alt={item.name}
                style={{ width: "100px" }}
                onError={HandleError}
              />
            </div>
          ))
        ) : (
          <p>No series found</p>
        )}
      </div>
    </>
  );
};

export default Index;
