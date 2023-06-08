//главная страница
import React from 'react';
import "../style/main-page.scss";
import { useState } from 'react';
//import { StyledEngineProvider } from '@mui/material/styles';                  
import  Folders from '../components/Folders.jsx';   
import First from '../components/bdFirst';
import Second from '../components/bdSecond';
//import Modal from '../components/ModalS';
import useModal from '../components/useModalS';
import ModalP from '../components/ModalPass';
import InfoPasswords from '../components/InfoPasswords';
import Breadcrumb from '../components/Breadcrumb';



const Main = () => {
  
  //modalF
  const [show, setShow] = useState(false);
  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);


  return (
    <div className="Main">
        
      <section className="wrapper">
        
          <nav className="directory">
            <input type="text" placeholder="Найти"/>
              <hr/>
              <Folders nodes = {First}/>
              <button className='add'></button>
              <hr/>
              <Folders nodes = {Second}/>
              <button className='add'></button>
            
              {/*
              <div className='label_button'>
                <h2>ОРГАНИЗАЦИЯ</h2>
                
                <button className='add'></button>
              </div>
              <hr/>
              <div className='label_button'>
                <h2>ЛИЧНОЕ</h2>
                <button className='add'></button>
              </div>*/}
              
          </nav>
         
          <div className="preview">
              
              <div className="navigation">  
                  <div>
                    
                  </div> 
                  {/* toggle for modalS*/}
                  <button onClick={openModal}>
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
                      
                  </div>
                
                  <div className="passwords_info">
                        <InfoPasswords />           
                  </div>
              </div>
          </div>
      </section>
      <ModalP closeModal={closeModal} show={show} />
      {/* <Modal
        isShowing={isShowing}
        hide={toggle}
        for modalS
      /> */}
    </div>
    
  );
}

export default Main;
