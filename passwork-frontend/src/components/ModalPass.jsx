import React from "react";
import "./modal-pass.css"



function ModalP(props) {
  const { show, closeModal } = props;

  return (
    <>
    <div className={show ? "overlay" : "hide"} onClick={closeModal} />
      <div className={show ? "modal-pass" : "hide"}>
        <button className="btnexit" onClick={closeModal}>X</button>
        <h1>Создание пароля</h1>
        
        <div className="info_mod">
          <label>Название</label>
          <input type="text" id="pass-name"/>
          <hr/>
          <label>Логин</label>
          <input type="text" id="pass-login"/>
          <hr/>
          <label>Пароль</label>
          <input type="password" id="pass-password"/>
          <hr/>
          <label>URL</label>
          <input type="url" id="pass-url"/>
          <hr/>    
        </div>
            
        <button className="btnsave">Сохранить</button>
      </div>
    </>
  );
}

export default ModalP;