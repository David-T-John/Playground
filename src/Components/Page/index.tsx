import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import './index.css';
const Page = (props: any) => {
    const theme = useContext(ThemeContext);
    return (
        <div 
            className="page-container"
            style={{
                background: theme?.pageBg,
                ...props.style
            }}>
            {props.children}
        </div>
        )
};
export default Page;