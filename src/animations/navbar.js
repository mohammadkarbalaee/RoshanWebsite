const navbarAnimation = {
    initial: {
        y: -100,
    },
    animate: {
        y:0,
    },
    transition:{
        x: {type:'spring' ,stiffness:200},
        default: { duration: 2.5 },
    }
}

export default navbarAnimation;
