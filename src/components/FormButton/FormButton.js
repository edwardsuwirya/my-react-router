import {ButtonLabel, StyledButton} from "./FormButtonStyle";
import Lottie from "lottie-react";
import loading from '../../assets/animation/green_loading.json';

const FormButton = (props) => {
    const {id, label, disabled = false, onClick} = props;
    return (
        <>
            <StyledButton id={id} onClick={onClick}
                          disabled={disabled}>
                <ButtonLabel>
                    {disabled ?
                        <>{label} <Lottie animationData={loading} loop={true}
                                          style={{width: '24px'}}/></>
                        : <div>{label}</div>}
                </ButtonLabel>
            </StyledButton>
        </>
    )
}

export default FormButton;