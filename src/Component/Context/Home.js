import {  useData } from "./BioProvider";


const Home = () => {
  const {MyName} = useData();

  return (
    <div>
      <h2>My name is {MyName}</h2>
    </div>
  );
};

export default Home;
