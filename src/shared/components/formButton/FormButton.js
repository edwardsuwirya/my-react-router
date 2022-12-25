const FormButton = (props) => {
    const {id, label, disabled = false, onClick} = props;
    return (
        <>
            <button id={id} onClick={onClick} disabled={disabled}>{label}</button>
        </>
    )
}

export default FormButton;