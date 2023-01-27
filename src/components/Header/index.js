import * as S from "./styles";

import LoginData from "./loginData";
import SearchForm from "../Search";

import imgLogoBlack from "../../assets/logoblack.png";

import { useState } from "react";

import { useBagContext } from "../../context/BagContext";
import { useUserContext } from "../../context/userContext";

import useFetchData from "../../hooks/useFetchData";
import { Link } from "react-router-dom";

const url = "http://localhost:3000/products";

const Header = ({ scroll }) => {
  const [showDropMenu, setShowDropMenu] = useState(false);

  const { productsInBag } = useBagContext();
  const { isLogged, userName } = useUserContext();

  const { products } = useFetchData(url);

  const filtered = products.map((product) => {
    return product.category;
  });

  const unique = [...new Set(filtered)];

  return (
    <S.HeaderContainer scroll={scroll}>
      <S.Header scroll={scroll}>
        <S.LogoAndIcons>
          <S.HeaderLogo to="/">
            <img src={imgLogoBlack} alt="logo" />
          </S.HeaderLogo>
          <Link to="/">
            <h2>Le Boutik</h2>
          </Link>
          <S.IconsContainer>
            {isLogged ? (
              <div
                onMouseEnter={() => setShowDropMenu(true)}
                onMouseLeave={() => setShowDropMenu(false)}
              >
                <S.IconLoginDiv>
                  <S.IconBiUserCircle />
                  <p>{userName ? userName.replace(/"/g, "") : ""}</p>
                </S.IconLoginDiv>
                {showDropMenu && (
                  <LoginData setShowDropMenu={setShowDropMenu} />
                )}
              </div>
            ) : (
              <S.IconLinks to="/login">
                <S.IconBiUserCircle /> <p>login</p>
              </S.IconLinks>
            )}

            <S.IconLinks to="/bag">
              <S.BagQtd>{productsInBag.length}</S.BagQtd>
              <S.IconCgShoppingBag />
            </S.IconLinks>
          </S.IconsContainer>
        </S.LogoAndIcons>
        <SearchForm />
      </S.Header>
      <nav>
        <S.Navbar>
          {unique &&
            unique.map((item) => (
              <S.NavList key={item} lenght={unique.length}>
                <S.NavItem to={`/category/${item}`}>{item}</S.NavItem>
              </S.NavList>
            ))}
        </S.Navbar>
      </nav>
    </S.HeaderContainer>
  );
};

export default Header;
