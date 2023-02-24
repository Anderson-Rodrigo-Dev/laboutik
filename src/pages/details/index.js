import * as S from "./styles";

import { useParams } from "react-router";

import { useBagContext } from "../../context/BagContext";
import Loading from "../../components/Loading";

import useFetchData from "../../hooks/useFetchData";

const Details = ({ scroll }) => {
  const { id } = useParams();
  const url = `https://json-server-ccx9idxd4-anderson-rodrigo-dev.vercel.app/products/${id}`;

  const { PutAndEditProductInBag } = useBagContext();

  const { products: product, loading } = useFetchData(url);

  return (
    <>
      {loading && <Loading />}
      {product && (
        <S.ProductDetailsContainer scroll={scroll}>
          <img src={product.image} alt={product.title} />
          <S.Info>
            <S.ProductDetails>
              <h2>{product.title}</h2>
              <h3>Category: {product.category}</h3>
              <S.ProductDescription>
                Description: {product.description}
              </S.ProductDescription>
            </S.ProductDetails>
            <S.ContainerBuy>
              <S.PriceValue>
                <h3>${product.price}</h3>
              </S.PriceValue>
              <S.AddToBag onClick={() => PutAndEditProductInBag(product)}>
                <S.IconCart />
              </S.AddToBag>
            </S.ContainerBuy>
          </S.Info>
        </S.ProductDetailsContainer>
      )}
    </>
  );
};

export default Details;
