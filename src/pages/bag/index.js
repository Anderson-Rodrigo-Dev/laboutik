import * as S from "./styles";
import BagEpt from "../../assets/cart_empty.svg";

import { Link } from "react-router-dom";

import { useBagContext } from "../../context/BagContext";

const Bag = () => {
  const {
    productsInBag,
    removeProductToBag,
    PutAndEditProductInBag,
    removeQtdOfProductsInBag,
  } = useBagContext();

  let totalPrice = productsInBag.reduce(function (total, product) {
    return total + product.price * product.qtd;
  }, 0);

  return (
    <S.BagContainer >
      {productsInBag.length === 0 ? (
        <S.BagEmpty>
          <img src={BagEpt} alt="bag ept" />
          <h2>
            Your bag is <span>empty</span>
          </h2>
          <p>Would you like to add something to your purchases?</p>
          <Link to="/">
            <button>go to new products</button>
          </Link>
        </S.BagEmpty>
      ) : (
        <S.ProductsInBag>
          {productsInBag.map((product) => (
            <S.ProductInBag key={product.id}>
              <S.ImageAndTitle>
                <img src={product.image} alt={product.title} />
                <p>{product.title}</p>
              </S.ImageAndTitle>

              <S.QtdContainer>
                <button
                  disabled={product.qtd <= 1}
                  onClick={() => removeQtdOfProductsInBag(product)}
                >
                  -
                </button>
                <span>
                  <p>{product.qtd}</p>
                </span>

                <button onClick={() => PutAndEditProductInBag(product)}>+</button>
              </S.QtdContainer>

              <S.PriceContainer>
                <p>Price: $ {(product.price * product.qtd).toFixed(2)}</p>
                <p>un price: $ {product.price}</p>
              </S.PriceContainer>
              <S.IconDelete onClick={() => removeProductToBag(product)} />
            </S.ProductInBag>
          ))}
          <S.PriceTotal>
            <p>
              Total: <span>$ {totalPrice.toFixed(2)}</span>
            </p>
          </S.PriceTotal>
        </S.ProductsInBag>
      )}
    </S.BagContainer>
  );
};

export default Bag;
