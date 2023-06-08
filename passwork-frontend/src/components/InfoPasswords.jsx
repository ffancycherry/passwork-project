import React from 'react';

function InfoPasswords (){
    return(
        <>
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
        </>       
    );         
}
export default InfoPasswords;