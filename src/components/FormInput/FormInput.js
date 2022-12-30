import {StyledErrorLabel, StyledFlexColumn, StyledInput} from "./FormInputStyle";

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
        <StyledFlexColumn>
            <StyledInput placeholder={label} {...compProps}/>
            {error &&
                <StyledErrorLabel>{error[id]}</StyledErrorLabel>
            }
        </StyledFlexColumn>
    )
}

export default FormInput;