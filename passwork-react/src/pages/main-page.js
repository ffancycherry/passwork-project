//главная страница

import React from 'react';
import "../frontend/main-page.scss";

const Main = () => {
  return (
    <div className="Main">
        
      <section className="wrapper">
        
          <div className="directory">
              <input type="text" placeholder="Найти"/>
              <hr/>
              <h2>ОРГАНИЗАЦИЯ</h2>
              <hr/>
              <h2>ЛИЧНОЕ</h2>
          </div>
         
          <div className="preview">
              
              <div className="navigation">  
                  <div>
                    <h2>Home</h2>
                    <h2>Components</h2>
                    <h2>Breadcrumb</h2>
                  </div> 
                  <button>Добавить пароль</button>
              </div>
              <div className="passwords">
                  
                  <div className="passwords_name">
                      <h2>ПАРОЛИ</h2>
                      <button>password 1</button>
                      <button>password 2</button>
                      <button>password 3</button>
                  </div>
                
                  <div className="passwords_info">
                      <div className="passwords_info_idt">
                      <h1>Name profile</h1>
                      <button></button>
                      </div>
                      <label>Логин</label>
                      <input type="text"/>
                      <hr/>
                      <label>Пароль</label>
                      <input type="password"/>
                      <hr/>
                      <label>URL</label>
                      <input type="url" />
                      <hr/>                
                  </div>
              </div>
          </div>
      </section>
    </div>
  );
}

export default Main;
