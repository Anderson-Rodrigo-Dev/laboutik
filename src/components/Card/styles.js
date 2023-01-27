import styled from "styled-components";

export const CardContainer = styled.div`
  width: 250px;
  height: 400px;
  border-radius: 10px;
  margin: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  
  padding: 10px;

  img {
    width: 250px;
    height: 280px;
    border-radius: 5px;
    object-fit: contain;
    margin-bottom: 10px;
    transition: 0.3s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const DescriptionContainer = styled.div`
  width: 250px;
  min-height: 131px;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin: 10px 0;
  }
`;

export const PriceValue = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  h3 {
    font-size: 18px;
    color: #009469;
    margin: 5px 0;
  }
`;
