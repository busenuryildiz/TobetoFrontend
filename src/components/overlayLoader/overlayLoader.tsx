import './overlayLoader.css';
import { useSelector } from "react-redux";

export const OverlayLoader = () => {
    const loadingState = useSelector((state: any) => state.loading);

    return (
        <>
            {loadingState.requestCount > 0 && (
                <div className="overlay">
                    <div className="overlay__inner">
                        <div className="overlay__content">
                            <img className="spinner" src="../Assets/image/tobeto-logo.png" alt="" />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};