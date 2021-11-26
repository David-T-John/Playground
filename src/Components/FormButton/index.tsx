import './index.css';
const FormButton = ({ click, label, style, disabled, type }: any) => {
    return (
        <button 
            className="form-button"
            onClick={click} 
            style={style}
            disabled={disabled}
            type={type}
        >{label}</button>
    )
};
export default FormButton;