import * as S from "./styles";

import React from "react";

import Card from "../../components/Card";
import Loading from "../../components/Loading";

import useFetchData from "../../hooks/useFetchData";

const url = "https://json-server-ccx9idxd4-anderson-rodrigo-dev.vercel.app/products";

const Home = ({ scroll }) => {
  const { products, loading } = useFetchData(url);

  return (
    <>
      {loading && <Loading />}
      <S.ContainerHome scroll={scroll}>
        {products && products.map((item) => <Card key={item.id} item={item} />)}
      </S.ContainerHome>
    </>
  );
};

export default Home;
