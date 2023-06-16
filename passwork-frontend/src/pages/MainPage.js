//главная страница
import React from 'react';
import "../style/main-page.scss";
import { useState } from 'react';
//import { StyledEngineProvider } from '@mui/material/styles';                  
import  Folders from '../components/Folders.jsx';   
import First from '../components/bdFirst';
import Second from '../components/bdSecond';
import ModalP from '../components/ModalPass';
import ModalA from '../components/ModalAdd';
import InfoPasswords from '../components/InfoPasswords';
//import Breadcrumb from '../components/Breadcrumb';
import {connect} from "react-redux";
import Fold from '../components/folderss';




const Main = (props) => {
  console.log(props);
  //modalF
  const [showAdd, setShowAdd] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const openModalAdd = () => setShowAdd(true);
  const openModalPass = () => setShowPass(true)
  const closeModalAdd = () => setShowAdd(false);
  const closeModalPass = () => setShowPass(false);


  return (
    <div className="Main">
        
      <section className="wrapper">
        
          <nav className="directory">
            {/* <input type="text" placeholder="Найти"/>
              <hr/> */}
              <div className='folders'>
                <div className='folders-tree'>
                  {/* <Folders nodes = {First}/> */}
                  <Fold folder = {First}/>
                </div>
                <div className='folder-add-btn'>
                  <button className='add' onClick={openModalAdd}></button>
                </div>
                
              </div>
              <hr/>
              <div className='folders'>
              <div className='folders-tree'>
                  <Fold folder = {Second}/>
                </div>
                <div className='folder-add-btn'>
                  <button className='add' onClick={openModalAdd}></button>
                </div>
              </div>
              
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
                  <button onClick={openModalPass}>
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
      <ModalP closeModal={closeModalPass} show={showPass} />
      <ModalA closeModal={closeModalAdd} show={showAdd} /> 
      {/* <Modal
        isShowing={isShowing}
        hide={toggle}
        for modalS
      /> */}
    </div>
    
  );
}

const mapStateToProps = ({api}) => ({api});

export default connect(mapStateToProps)(Main);
