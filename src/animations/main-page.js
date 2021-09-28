export const startingAnimation = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1
    },
    transition:{
        default: { duration: 3 },
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
        delay:0.3,
        default: { duration: 0.4},
    }
};


export const imageScrollDownAnimation = {
    initial: {
        opacity: 1,
    },
    animate: {
        opacity: 0,
    },
    transition:{
        default: { duration: 0.3},
    }
};
