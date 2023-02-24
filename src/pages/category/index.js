import * as S from "./styles.js";

import React from "react";
import { useParams } from "react-router-dom";

import Card from "../../components/Card";
import Loading from "../../components/Loading/index.js";

import useFetchData from "../../hooks/useFetchData";

const url = "https://json-server-ccx9idxd4-anderson-rodrigo-dev.vercel.app/products";

const Category = ({scroll}) => {
  const { id } = useParams();

  const { products, loading } = useFetchData(url);

  const productsFiltered = products.filter((item) => {
    return item.category === id;
  });

  return (
    <S.CategoryContainer scroll={scroll}>
      {loading && <Loading />}
      {!loading ? (
        productsFiltered.length > 0 ? (
          productsFiltered.map((item) => <Card key={item.id} item={item} />)
        ) : (
          <p>Sem itens Na lista</p>
        )
      ) : (
        ""
      )}
    </S.CategoryContainer>
  );
};

export default Category;
