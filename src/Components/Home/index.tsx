import { useContext, useState } from 'react';
import './index.css';
import Loading from '../Loading';
import Page from '../Page';
import { ThemeContext } from '../../context/ThemeContext';
import ContentContainer from '../ContentContainer';

const Home = () => {

    const [isLoading, setIsLoading] = useState(true);

    const theme = useContext(ThemeContext);

    setTimeout(()=>{
        setIsLoading(false);
    } ,1000);
    
    return (
            <Page style={{minHeight: "100vh"}}>
                {isLoading ? <Loading size="3em"/> :
                   <ContentContainer>
                       <h1 style={{color: theme?.color}}>Your favorite app's<br /> favorite app</h1>
                       <button className="button">Get Started</button>
                    </ContentContainer>
                }
            </Page>
    )
}
export default Home;