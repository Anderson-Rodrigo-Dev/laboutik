import * as S from "./styles"

import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <S.CardContainer>
      <Link to={`/product/${item.id}`}>
        <img src={item.image} alt={item.title} />
        <S.DescriptionContainer>
          <p>{item.title}</p>

          <S.PriceValue>
            <h3>$ {item.price}</h3>
          </S.PriceValue>
        </S.DescriptionContainer>
      </Link>
    </S.CardContainer>
  );
};

export default Card;
