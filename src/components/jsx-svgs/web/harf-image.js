import {motion} from 'framer-motion';
import {flowerAnimation} from "../../../animations/kashf-image";

function HarfWebImage() {
    return (
        <svg width={"454px"} height={"206px"} xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 454 206"
             version="1.1"
        >
            <title>Combined Shape</title>
            <defs>
                <linearGradient x1="100%" y1="50%" x2="0%" y2="50%" id="linearGradient-1">
                    <stop stopColor="#FE274C" offset="0%" >

                    </stop>
                    <stop stopColor="#3E929A" offset="50.087%" >

                    </stop>
                    <stop stopColor="#4AE788" offset="100%" >

                    </stop>
                </linearGradient>
            </defs>
            <motion.path
                variants={flowerAnimation}
                initial={"hidden"}
                animate={"visible"}
                d="M450 134.632c-7.225-6.602-79.345-1.451-86.029-1.62-6.684 0-10.495-17.985-15.542-17.985-5.048 0-16.292 24.393-22.104 23.407-7.537-2.055-7.537-48.21-14.38-48.21-9.365-.745-7.242 64.55-15.038 64.006-6.755 0-8.049-115.71-16.48-115.71-12.49-.133-10.328 163.515-24.848 163.48-14.897-.325.477-200.432-17.607-201.944-18.297-3.347-14.466 143.318-36.626 140.09-17.608-2.41-23.911-35.903-34.346-37.795-8.317-1.32-22.983 26.342-65.11 30.662-20.479 2.1-35.215 2.955-101.89 2.567m0-17.564h70.244m-41.705 35.398l41.833-.267"
                transform="translate(2 2)"
                stroke="url(#linearGradient-1)"
                strokeWidth="4"
                fill="none"
                fillRule="evenodd"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default HarfWebImage;
