import styled from "styled-components";

import { SlUserFemale } from "react-icons/sl";
import { BsHandbag } from "react-icons/bs";
import { NavLink, Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  width: 100%;
`;

export const Header = styled.div`
  z-index: 1;
  background-color: #F9CDC8;
  position: ${({ scroll }) => (scroll > 194 ? "fixed" : "relative")};
  width: 100%;
  padding: ${({ scroll }) => (scroll > 194 ? "10px 30px" : "20px 30px")};
  animation: ${({ scroll }) => (scroll > 194 ? "scrolling 1s normal" : "")};

  @keyframes scrolling {
    0% {
      margin-top: -200px;
    }
    100% {
      margin-top: 0;
    }
  }
`;

export const LogoAndIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-family: "britney";
  }
`;

export const HeaderLogo = styled(Link)`
  cursor: pointer;

  img {
    width: 120px;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  div {
    display: flex;
    align-items: center;
  }
`;

export const IconLoginDiv = styled.div`
  cursor: pointer;

  p {
    align-self: end;
    line-height: 12px;
  }
`;

export const IconLinks = styled(Link)`
  display: flex;
  align-items: flex-end;
  margin-left: 20px;
  cursor: pointer;
  position: relative;
`;

export const IconBiUserCircle = styled(SlUserFemale)`
  font-size: 25px;
  margin-right: 5px;
`;

export const IconCgShoppingBag = styled(BsHandbag)`
  font-size: 25px;
`;

export const BagQtd = styled.p`
  position: absolute;
  left: 13px;
  top: 13px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  font-size: 13px;
  color: white;
  background-color: #d3614a;
`;

export const Navbar = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  max-width: 100%;
  position: relative;
`;

export const NavItem = styled(NavLink)`
  width: 100%;
  height: 50px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    border-bottom: 3px solid #f9cdc8;
  }

  &.active {
    border-bottom: 3px solid #f9cdc8;
  }
`;

export const NavList = styled.li`
  width: ${({ lenght }) => 100 / lenght}%;
`;
