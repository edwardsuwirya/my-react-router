import './formInput.css';

const FormInput = (props) => {
    const {id, label, disabled = false, value, onValueChange, type = 'text', error} = props;
    const handleFormInput = (e) => {
        const value = e.target.value;
        onValueChange(value);
    }
    return (
        <div className='container'>
            <label htmlFor={id}>
                {label}
            </label>
            <input id={id} name={id} type={type} disabled={disabled} value={value}
                   onChange={handleFormInput}/>
            {error &&
                <span className='error'>{error[id]}</span>
            }
        </div>
    )
}

export default FormInput;