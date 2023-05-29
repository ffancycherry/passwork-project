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
              <div className='label_button'>
                <h2>ОРГАНИЗАЦИЯ</h2>
                <button className='add'></button>
              </div>
              <hr/>
              <div className='label_button'>
                <h2>ЛИЧНОЕ</h2>
                <button className='add'></button>
              </div>
              
          </div>
         
          <div className="preview">
              
              <div className="navigation">  
                  <div>
                    <h2>Home</h2>
                    <h2>Components</h2>
                    <h2>Breadcrumb</h2>
                  </div> 
                  <button>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                      <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
                    </svg>
                    <span>Добавить пароль</span>
                  </button>
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
