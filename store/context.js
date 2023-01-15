import { createContext, useState } from "react";
import Item_Image from "../assets/item_image.png";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const [registered, setRegistered] = useState(true);
  const [inspections, setInspections] = useState([
    {
      item_name: "Mercedes-Benz C 220",
      date_uploaded: "Tue, 12 Dec. 2022",
      image: Item_Image,
    },
  ]);

  return (
    <GlobalContext.Provider
      value={{
        user,
        registered,
        setUser,
        setRegistered,
        inspections,
        setInspections,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
