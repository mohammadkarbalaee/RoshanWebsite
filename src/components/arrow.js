import Lottie from "lottie-react";
import arrow from "../assets/lotties/arrow.json";
import './arrow.scss'

function Arrow(){
    return(
        <div className={'wrapper'}>
            <Lottie animationData={arrow} id={'arrow'}/>
        </div>
    )
}

export default Arrow;
