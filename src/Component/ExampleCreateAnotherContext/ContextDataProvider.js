import React from "react";
import ContextProvider from "./ContextProvider";
import ContextConsumer from "./ContextConsumer";

const ContextDataProvider = () => {
  return (
    <div>
      <ContextProvider>
        <ContextConsumer />
      </ContextProvider>
    </div>
  );
};

export default ContextDataProvider;
