import * as S from "./styles";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/search?q=" + query);

    setQuery("");
  };

  return (
    <S.SearchContainer onSubmit={handleSubmit}>
      <S.IconContainer>
        <S.IconSearch />
      </S.IconContainer>
      <S.Search
        name="search"
        autoComplete="off"
        placeholder="search product or category"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
    </S.SearchContainer>
  );
};

export default SearchForm;
