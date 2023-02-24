import * as S from "./styles";

import React, { useState } from "react";

import useFetchData from "../../hooks/useFetchData";

import Modal from "../../components/Modal";
import ProductForm from "../../components/ProductForm";

const Editproduct = () => {
  const [query, setQuery] = useState("");
  const [urlId, setUrlId] = useState("");
  const [productToUpdate, setProductToUpdate] = useState(null);

  const baseUrl = `https://json-server-ccx9idxd4-anderson-rodrigo-dev.vercel.app/products`;
  const url = `${baseUrl}?q=${query}`;

  const { products } = useFetchData(url);
  const { httpConfig } = useFetchData(urlId);

  const handleDelete = (product) => {
    const confirmDelete = prompt(
      "submit 'yes' if you want to delete the product"
    );

    const confirmation = confirmDelete.toLowerCase();

    if (confirmation === "yes") {
      setUrlId(`${baseUrl}/${product.id}`);

      setTimeout(() => {
        httpConfig(product, "DELETE");
        alert("product deleted!");
        window.location.reload();
      }, 1000);
    } else {
      alert("product not deleted");
    }
  };

  const hideOrShowModal = (display) => {
    const modal = document.querySelector("#modal");

    if (display) {
      modal.classList.remove("hide");
    } else {
      modal.classList.add("hide");
    }
  };

  const handleEdit = (product) => {
    hideOrShowModal(true);
    setProductToUpdate(product);
  };

  const updateProduct = (product, id) => {
    const updatedProduct = { ...product, id: id };

    const updatedItems = products.map((item) => {
      return item.id === updatedProduct.id ? updatedProduct : item;
    });

    setUrlId(`${baseUrl}/${updatedProduct.id}`);

    setTimeout(() => {
      httpConfig(updatedItems[0], "PUT");
      alert("product Edited!");
      window.location.reload();
    }, 1000);

    hideOrShowModal(false);
  };

  return (
    <S.EditContainer >
      <S.SearchForm>
        <S.Search
          placeholder="search for any product"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </S.SearchForm>

      <S.ProductsList>
        {products.length > 0 ? (
          products.map((product) => (
            <S.ProductItem key={product.id}>
              <Modal
                children={
                  <ProductForm
                    btnText="Edit Product"
                    product={productToUpdate}
                    handleUpdate={updateProduct}
                  />
                }
              />
              <S.ProductInfos>
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <p>$ {product.price}</p>
              </S.ProductInfos>

              <S.IconContainer>
                <S.IconPencil onClick={() => handleEdit(product)} />
                <S.IconTrash onClick={() => handleDelete(product)} />
              </S.IconContainer>
            </S.ProductItem>
          ))
        ) : (
          <p>Product Not Found!</p>
        )}
      </S.ProductsList>
    </S.EditContainer>
  );
};

export default Editproduct;
