/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext({
  categories: [],
  products: [],
  category: undefined,
  onUpdateCategory:{},
  carts: {},
  onAddCarts:{},
});

const StoreContextProvider = (props) => {
  const [data, setData] = useState({
    categories: [],
    products: [],
    category: undefined,
    isCategoryLoading: false,
    carts: {},
  });

  const onUpdateCategory = (category) => {
    if (!category) {
      getAllProducts("https://fakestoreapi.com/products", undefined);
    } else {
      getAllProducts(
        `https://fakestoreapi.com/products/category/${category}`,
        category
      );
    }
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) =>
        setData((p) => {
          return {...p, categories: json.map((j) => {return { menu_name: j, menu_image: "" };
            }),
          };
        })
      );
  }, []);

  useEffect(() => {
    getAllProducts("https://fakestoreapi.com/products", undefined);
  }, []);

  const getAllProducts = async (uri, category) => {
    fetch(uri)
      .then((res) => res.json())
      .then((json) =>
        setData((p) => {
          return {
            ...p,
            category,
            products: json.map((prod) => {
              return {
                id: prod.id,
                name: prod.title,
                price: prod.price,
                description: prod.description,
                image: prod.image,
              };
            }),
          };
        })
      );
  };


  const onAddCarts = (product, action,fullclear = false) => {
    setData((p) => {
      let carts = { ...p.carts };

      if (action) {
        if (carts[product.id]) {
          carts[product.id] = [product, ...carts[product.id]];
        } else {
          carts[product.id] = [product];
        }
      } else {
        if (carts[product.id] && carts[product.id].length > 0) {
         if(fullclear){
          carts[product.id] = []
         }else{
          carts[product.id] = carts[product.id].slice(0,carts[product.id].length - 1);
         }
        }
      }

      return {
        ...p,
        carts,
      };
    });
  };


  const contextValue = {
    ...data,
    onUpdateCategory,
    onAddCarts,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
