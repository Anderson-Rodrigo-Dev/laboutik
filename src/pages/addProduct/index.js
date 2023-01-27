import * as S from "./styles";

import ProductForm from "../../components/ProductForm";

const CreateProduct = () => {
  return (
    <S.AddProductContainer>
      <h1>Create a new product:</h1>
      <ProductForm btnText="Create Product" />
    </S.AddProductContainer>
  );
};

export default CreateProduct;
