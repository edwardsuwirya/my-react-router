import './formInput.css';

const FormInput = (props) => {
    const {id, label, disabled = false, inputRef, value, onValueChange, type = 'text', error} = props;
    const handleFormInput = (e) => {
        const value = e.target.value;
        onValueChange(value);
    }
    let compProps = {
        id, name: id, type, disabled
    };
    if (inputRef) {
        compProps = {...compProps, ref: inputRef}
    } else {
        compProps = {...compProps, value, onChange: handleFormInput}
    }
    return (
        <div className='container'>
            <label htmlFor={id}>
                {label}
            </label>
            <input {...compProps}/>
            {error &&
                <span className='error'>{error[id]}</span>
            }
        </div>
    )
}

export default FormInput;