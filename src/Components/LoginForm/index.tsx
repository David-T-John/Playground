import './index.css';
import { useContext, useState} from 'react'
import { ThemeContext } from '../../context/ThemeContext';
import { UserContext } from '../../context/UserContext';
import FormInput from '../FormInput';
import FormButton from '../FormButton';
import Loading from '../Loading';

const LoginForm = (props: any) => {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginStep, setLoginStep] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    const theme = useContext(ThemeContext);
    const user = useContext(UserContext);

    const handleOnSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        user?.updateUsername(username)
        setIsLoading(true);
        alert("Email: " + username + "\nPassword: " + password);
    }
    
    const handleLoginFormBtn = (e: React.FormEvent) => {
        e.preventDefault();
        if(loginStep === 1) {
            setLoginStep(2);
        } else {
            handleOnSubmit(e);
        }
    }
    return (
        
        <form id="login-form" 
                onSubmit={e => handleOnSubmit(e)}
            >
                <h3>Login</h3>
                <br/>
                {isLoading ? <Loading size="2em" /> : 
                <>
                {loginStep === 1 &&
                    <FormInput 
                    type="email"
                    label="EMAIL ADDRESS" 
                    change={(e: any) => setUsername(e.target.value)}
                    />}
                
               {loginStep === 2 &&
                    <FormInput 
                        type="password"
                        label="PASSWORD"
                        change={(e: any) => setPassword(e.target.value)}
                    />}
                
                <div>
                     <FormButton 
                            type={loginStep === 2 && "submit"}
                            label={loginStep === 1 ? "NEXT" : "LOGIN"} 
                            click={(e: any) => handleLoginFormBtn(e)}
                            style={{background: theme?.headerBg, float: "right"}}
                            disabled={isLoading && true}
                    />
                    {loginStep === 2 && 
                        <FormButton 
                            label="BACK" 
                            click={()=>setLoginStep(1)}
                            style={{background: "#ccc", color: "#333", float: "left"}}
                        />
                    }
                </div>
                </>}
            </form>
        )
};
export default LoginForm;