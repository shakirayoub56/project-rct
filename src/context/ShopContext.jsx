import React, { createContext } from 'react';
import all_product from '../Components/Assets/all_product';

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const contextValue = {
    all_products: all_product, // Correcting the property name to plural for consistency
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
