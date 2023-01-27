import { useEffect, useState } from "react";
import useFetchData from "../../hooks/useFetchData";
import * as S from "./styles";

const url = "http://localhost:3000/products";

const ProductForm = ({ product, handleUpdate, btnText }) => {
  const [data, setData] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
  });
  const [formError, setFormError] = useState("");



  useEffect(() => {
    if (product) {
      setData({
        title: product.title,
        price: product.price,
        description: product.description,
        category: product.category,
        image: product.image,
      });
    }
  }, [product]);

  const { httpConfig, loading } = useFetchData(url);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => {
      const newData = { ...prev, [name]: value };

      return newData;
    });
  };

  const clearData = () => {
    setData({
      title: "",
      price: "",
      description: "",
      category: "",
      image: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");

    if (
      !data.title ||
      !data.price ||
      !data.description ||
      !data.category ||
      !data.image
    ) {
      return setFormError("fill in all fields!");
    }

    try {
      new URL(data.image);
    } catch (error) {
      return setFormError("The image needs to be a URL.");
    }

    if (handleUpdate) {
      handleUpdate(data, product.id);
    } else {
      httpConfig(data, "POST");
      clearData();
      window.location.reload();
    }
  };

  return (
    <S.FormContainer onSubmit={handleSubmit}>
      {formError && (
        <S.DivError>
          <p>{formError}</p>
        </S.DivError>
      )}
      <label>
        <span>Product Name:</span>
        <input
          type="text"
          name="title"
          value={data.title}
          onChange={handleChange}
        />
      </label>
      <label>
        <span>Product Price:</span>
        <input
          type="number"
          name="price"
          value={data.price}
          onChange={handleChange}
        />
      </label>
      <label>
        <span>Product Description:</span>
        <textarea
          name="description"
          value={data.description}
          onChange={handleChange}
        ></textarea>
      </label>
      <label>
        <span>Product Category:</span>
        <input
          type="text"
          name="category"
          value={data.category}
          onChange={handleChange}
        />
      </label>
      <label>
        <span>Product Image:</span>
        <input
          type="text"
          name="image"
          value={data.image}
          onChange={handleChange}
        />
      </label>
      {loading && <S.Submit value="Loading" disabled />}
      {!loading && <S.Submit value={btnText} />}
    </S.FormContainer>
  );
};

export default ProductForm;
