export const flowerAndFrameAnimation = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delay:1,
            duration: 0.8
        }
    },
};

export const dotAnimation = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            delay:0.1,
            duration: 0.5
        }
    },
};

export const mainLineAnimation = {
    hidden: {
        pathLength:0,

    },
    visible: {
        pathLength:1,
        transition: {
            duration: 1.5
        }
    },
};

export const subLineAnimation = {
    hidden: {
        pathLength:0
    },
    visible: {
        pathLength:1,
        transition: {
            delay:0.5,
            duration: 1
        }
    },
};

export const polygonAnimation = {
    hidden: {
        pathLength:0
    },
    visible: {
        pathLength:1,
        transition: {
            delay:1,
            duration: 0.8
        }
    },
};

export const textAnimation = {
    hidden: {
        opacity: 0,
        x:20,
    },
    visible: {
        opacity: 1,
        x:0,
        transition: {
            delay:1,
            duration: 0.5
        }
    },
};
