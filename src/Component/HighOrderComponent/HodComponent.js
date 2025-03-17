import React, { useEffect, useState } from "react";

const withLoading = (WrappedComponent) => {
  return (props) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => setLoading(false), 2000); // Simulate data fetching
    }, []);

    return loading ? <h2>Loading...</h2> : <WrappedComponent {...props} />;
  };
};
const DataComponent = () => <h2>Data Loaded Successfully!</h2>;

const EnhancedComponent = withLoading(DataComponent);

const HodComponent = () => {
  return <EnhancedComponent />;
};

export default HodComponent;
