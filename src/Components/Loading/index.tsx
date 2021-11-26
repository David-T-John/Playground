import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import './index.css';
const Loading = ({ size }: any) => {
    const theme = useContext(ThemeContext);
    return (
        <div className="loading-container" style={{background: theme?.pageBg}}>
            <div className="loading" style={{ height: size, width: size }}></div>
        </div>
    )
};
export default Loading;