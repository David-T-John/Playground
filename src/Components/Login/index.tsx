import {  useState } from 'react';
import Loading from '../Loading';
import LoginForm from '../LoginForm';
import Page from '../Page';
import './index.css';

const Login = () => {

    const [isPageLoading, setIsPageLoading] = useState(true);

    setTimeout(()=>setIsPageLoading(false), 1000);
    
    return (
        <Page style={{
            padding: "2em 0em", 
            minHeight: "60vh", 
            display: "flex", 
            justifyContent: "center",
            alignItems: "center",
            }}>
            {isPageLoading ? <Loading size="3em" /> :
            <LoginForm />
            }
        </Page>
    )
}
export default Login;