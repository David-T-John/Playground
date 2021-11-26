import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const IconButton = ({ click, icon, id }: any): any => {
    return (
        <li>
            <button 
                onClick={click} 
                id={id}
            >
                <FontAwesomeIcon icon={icon}/>
            </button>
        </li>
    )
};
export default IconButton;