import { useNavigate } from "react-router-dom"

const CloseButton = () => {
    const navigate = useNavigate()
    const goBack = () => {
        navigate(-1)
    }
    return (
        <button type="button" className="btn-close" aria-label="Close" onClick={goBack}></button>
    );
}

export default CloseButton;
