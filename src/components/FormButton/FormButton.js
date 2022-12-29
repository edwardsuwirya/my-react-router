import {StyledButton} from "../styled";

const FormButton = (props) => {
    const {id, label, disabled = false, onClick} = props;
    return (
        <>
            <StyledButton id={id} onClick={onClick} disabled={disabled}>{label}</StyledButton>
        </>
    )
}

export default FormButton;