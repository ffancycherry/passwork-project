import React from "react";
import "./modal-add.css"

function ModalA(props) {
  const { show, closeModal } = props;

  return (
    <>
    <div className={show ? "overlay" : "hide"} onClick={closeModal} />
      <div className={show ? "modal-add" : "hide"}>
        <button className="btnexit" onClick={closeModal}>X</button>
        <h1>Создание папки</h1>
        <div className="add_mod">
          <label>Название</label>
          <input type="text" id="folder-name"/>
          <hr/>
        </div>   
        <button className="btnsave">Сохранить</button>
      </div>
    </>
  );
}

export default ModalA;