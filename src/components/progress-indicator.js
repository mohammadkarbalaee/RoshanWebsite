import Lottie from "lottie-react";
import progressIndicator from "../assets/lotties/progress-indicator.json";
import './progress-indicator.css'

function ProgressIndicator(){
    return(
        <div className={'wrapper'}>
            <Lottie animationData={progressIndicator} id={'progress-indicator'}/>
        </div>
    )
}

export default ProgressIndicator;
