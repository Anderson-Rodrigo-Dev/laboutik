import React from "react";

// css
import * as S from "./styles";

export const Modal = ({ children }) => {

  const closeModal = () => {
    const modal = document.querySelector("#modal");
    modal.classList.add("hide");
  };

  return (
    <div id="modal" className="hide">
      <S.Fade onClick={closeModal}></S.Fade>
      <S.Modal>
        <h2>Edit Product</h2>
        {children}
      </S.Modal>
    </div>
  );
};

export default Modal;
