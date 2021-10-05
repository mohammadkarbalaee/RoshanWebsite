export default function customersAnimation(delay,duration,shouldAnimate){
    return shouldAnimate ? {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delay: delay,
                duration: duration,
            }
        },
    } : {
        hidden: {
        },
        visible: {
        },
    }
}
