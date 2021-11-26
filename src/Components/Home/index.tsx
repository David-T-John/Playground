import { useContext, useState } from 'react';
import './index.css';
import Loading from '../Loading';
import Page from '../Page';
import { ThemeContext } from '../../context/ThemeContext';

const Home = () => {

    const [isLoading, setIsLoading] = useState(true);

    const theme = useContext(ThemeContext);

    setTimeout(()=>{
        setIsLoading(false);
    } ,1000);
    
    return isLoading ? <Loading size="3em"/> : (
            <Page>
                <h1 style={{color: theme?.color}}>Your favorite app's<br /> favorite app</h1>
            </Page>
    )
}
export default Home;