
//форма входа
import "../style/login-page.scss";
import {Link} from 'react-router-dom';

function Login () {
  return (
  <div className="Login">
        <h2>Добро пожаловать!</h2>
        <form className="login-form">
            <input type="text" placeholder="Введите логин"/>
            <input type="password" placeholder="Введите пароль"/>
            <button type="submit"> <Link to="/main-page">ВОЙТИ</Link>
            </button>        
            <a href="/">Забыли пароль?</a>
        </form>
    </div>
  );
}
export default Login;