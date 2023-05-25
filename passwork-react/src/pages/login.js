import "../frontend/login-page.scss";
const Login = () => {
  return (
  <div className="Login">
        <h2>Добро пожаловать!</h2>
        <form className="login-form">
            <input type="text" placeholder="Введите логин"/>
            <input type="password" placeholder="Введите пароль"/>
            <button type="submit">ВОЙТИ</button>
            <a href="/">Забыли пароль?</a>
        </form>
    </div>
  );
}
export default Login;