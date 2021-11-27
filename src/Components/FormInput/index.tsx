import './index.css';
const FormInput = ({ type, change, label }: any) => {
    return (
        <>
        <label className="form-input-label" htmlFor={type}>{label}</label>
        <input 
            id={type} 
            type={type} 
            className="form-input"
            onChange={change}

        />
        <br/>
        </>
    )
};
export default FormInput;