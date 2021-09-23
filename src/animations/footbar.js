const footbarAnimation = {
    initial: {
        opacity: 0.01,
        y: +100,
    },
    animate: {
        y:0,
        opacity: 1,
    },
    transition:{
        x: {type:'spring' ,stiffness:200},
        default: { duration: 2 },
    }
}

export default footbarAnimation;
