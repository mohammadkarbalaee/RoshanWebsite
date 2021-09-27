export const startingAnimation = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1
    },
    transition:{
        default: { duration: 2 },
    }
};

export const textScrollDownAnimation = {
    initial: {
        opacity: 1,
        y:0,
    },
    animate: {
        opacity: 0,
        y:-70,
    },
    transition:{
        default: { duration: 0.6},
    }
};


export const imageScrollDownAnimation = {
    initial: {
        opacity: 1,
        y:0,
    },
    animate: {
        opacity: 0,
        y:+70,
    },
    transition:{
        default: { duration: 0.6},
    }
};
