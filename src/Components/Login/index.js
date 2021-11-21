import { useContext, useState } from 'react';
import { ThemeContext } from '../../context/themeContext';
import Header from '../Header';
import Loading from '../Loading';
import './index.css';
const Login = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [theme, toggleTheme] = useContext(ThemeContext);
    setTimeout(()=>{
        setIsLoading(false);
    } ,1000);

    const handleOnSubmit = (e) => {
        e.preventDefault();
    }
    return isLoading ? 
    <>
    <Header />
    <Loading />
    </>
     : (
        <div>
            <Header/>
            <form id="login-form" onSubmit={e => handleOnSubmit(e)}>
                <h2>Login</h2>
                <br/>
                <label for="email">EMAIL ADDRESS</label>
                <input id="email-address" />
                <br/>
                <label for="password">PASSWORD</label>
                <input id="password" />
                <br/>
                <div>
                    <button type="submit" style={{background: theme.background}}>LOGIN</button>
                </div>
            </form>
        </div>
    )
}
export default Login;