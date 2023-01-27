import { createContext, useContext, useState } from "react";

export const BagContext = createContext();

export const BagProvider = ({ children }) => {
  const [productsInBag, setProductsInBag] = useState([]);

  const PutAndEditProductInBag = (product) => {
    const copyProductsInBag = [...productsInBag];

    const itemInBag = productsInBag.find((productInBag) => productInBag.id === product.id);

    if (!itemInBag) {
      copyProductsInBag.push({ ...product, qtd: 1 });
    } else {
      itemInBag.qtd += 1;
    }

    setProductsInBag(copyProductsInBag);
  };

  const removeQtdOfProductsInBag = (product) => {
    const copyProductsInBag = [...productsInBag];

    const itemInBag = productsInBag.find((productInBag) => productInBag.id === product.id);

    if (itemInBag.qtd > 1) {
      itemInBag.qtd -= 1;
      setProductsInBag(copyProductsInBag);
    } else {
      return;
    }

    setProductsInBag(copyProductsInBag);
  };

  const removeProductToBag = (product) => {
    const filtered = productsInBag.filter((productInBag) => {
      return productInBag !== product;
    });

    setProductsInBag(filtered);
  };

  return (
    <BagContext.Provider
      value={{
        productsInBag,
        removeProductToBag,
        PutAndEditProductInBag,
        removeQtdOfProductsInBag,
      }}
    >
      {children}
    </BagContext.Provider>
  );
};

export const useBagContext = () => {
  const context = useContext(BagContext);

  if (!context) {
    console.log("Context not found!");
  }

  return context;
};
