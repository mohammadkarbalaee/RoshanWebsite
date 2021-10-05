export const opacityAnimation = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delay:2.4,
            duration: 0.8
        }
    },
};

export const bottomLineAnimation = {
    hidden: {
        x:-25,
        pathLength:0
    },
    visible: {
        pathLength:1,
        transition: {
            delay:3.1,
            duration: 0.8
        }
    },
};

export const boxAnimation = {
    hidden: {
        pathLength:0,
        x:10,
    },
    visible: {
        pathLength:1,
        transition: {
            delay:4,
            duration: 1.1
        }
    },
};

export const backgroundAnimation = {
    hidden: {
        x:-20,
        opacity: 0
    },
    visible: {
        opacity: 0.3,
        transition: {
            delay:4.6,
            duration: 0.8
        }
    },
};

export const aboutAnimation = {
    hidden: {
        x:-20,
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delay:4.6,
            duration: 0.6
        }
    },
};

export const backgroundAnimationMobile = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 0.3,
        transition: {
            delay:4.1,
            duration: 0.8
        }
    },
};

export const aboutAnimationMobile = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delay:4.6,
            duration: 0.6
        }
    },
};

export const bottomLineAnimationMobile = {
    hidden: {
        pathLength:0
    },
    visible: {
        pathLength:1,
        transition: {
            delay:4.1,
            duration: 0.8
        }
    },
};

export const boxAnimationMobile = {
    hidden: {
        pathLength:0
    },
    visible: {
        pathLength:1,
        transition: {
            delay:4,
            duration: 1.1
        }
    },
};
