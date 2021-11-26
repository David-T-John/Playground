import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { UserContext } from '../../context/UserContext';
import Loading from '../Loading';
import Page from '../Page';
import './index.css';

const Login = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginStep, setLoginStep] = useState(1);
    const theme = useContext(ThemeContext);
    const user = useContext(UserContext);

    setTimeout(()=>setIsLoading(false), 1000);

    const handleOnSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Email: " + username + "\nPassword: " + password);
        // user?.updateUsername(username);
    }
    
    const handleLoginFormBtn = (e: React.FormEvent) => {
        e.preventDefault();
        if(loginStep === 1) {
            user?.updateUsername(username)
            setLoginStep(2);
        } else {
            handleOnSubmit(e);
        }
    }
    
    return isLoading ? <Loading size="3em" /> : (
        <Page style={{
            padding: "2em 0em", 
            minHeight: "60vh", 
            display: "flex", 
            justifyContent: "center",
            alignItems: "center",
            }}>
            <form id="login-form" 
                // onSubmit={e => handleOnSubmit(e)}
            >
                <h3>Login</h3>
                <br/>
                {loginStep === 1 &&
                    <>
                        <label htmlFor="email">EMAIL ADDRESS</label>
                        <input 
                            id="email" 
                            type="email" 
                            className="form-input" 
                            onChange={e=>setUsername(e.target.value)}
                        />
                    </>
                }
                
                {/* <label htmlFor="username">USERNAME</label>
                <input onChange={e => setUsername(e.target.value)} id="username" type="text" className="form-input"/>
                 */}
               {loginStep === 2 &&
                    <>
                        <label htmlFor="password">PASSWORD</label>
                        <input 
                            id="password" 
                            type="password" 
                            className="form-input"
                            onChange={e=>setPassword(e.target.value)}

                        />
                    </>
                }
                <br/>
                <div>
                    <button 
                        // type={loginStep === 2 ? "submit" : "button"} 
                        onClick={e => handleLoginFormBtn(e)} 
                        style={{background: theme?.headerBg, float: "right"}}
                    >{loginStep === 1 ? "NEXT" : loginStep === 2 ? "LOGIN" : "LOGIN"}</button>
                    
                     {loginStep === 2 && 
                         <button 
                         // type={loginStep === 2 ? "submit" : "button"} 
                         onClick={()=>setLoginStep(1)} 
                         style={{background: "#ccc", color: "#333", float: "left"}}
                     >BACK</button>
                    }
                </div>
            </form>
        </Page>
    )
}
export default Login;