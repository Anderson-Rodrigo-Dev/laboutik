import * as S from "./styles";

import { useSearchParams } from "react-router-dom";

import Card from "../../components/Card";
import Loading from "../../components/Loading";

import useFetchData from "../../hooks/useFetchData";

const Search = ({scroll}) => {
  const [searchParams] = useSearchParams();
  const url = "http://localhost:3000/products?" + searchParams;

  const { products, loading } = useFetchData(url);

  return (
    < >
      {loading && <Loading />}
      <h1>Search Results</h1>
      <S.ContainerSearch scroll={scroll}>
        {products.length > 0 ? (
          products.map((item) => <Card key={item.id} item={item} />)
        ) : (
          <h2>NotFound</h2>
        )}
      </S.ContainerSearch>
    </>
  );
};

export default Search;
