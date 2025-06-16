import { createContext, useContext } from "react";

export const DreatBio = createContext();

 const BioProvider = ({ children }) => {
  const MyName = "Ram";
 const MyAge =26;

  return (
    <DreatBio.Provider value={{MyName, MyAge}}>
      {children}
    </DreatBio.Provider>
  );
};

export default BioProvider

export const useData = () =>{
  const Context = useContext(DreatBio);
  return Context;
}