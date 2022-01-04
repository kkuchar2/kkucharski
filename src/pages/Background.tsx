import React, {useCallback, useEffect, useState} from "react";
import {motion} from "framer-motion";
import {interpolatePath} from 'd3-interpolate-path';

const paths = [
    'M 332.4 55.7 C 340.1 61 343.1 73 350.9 86.1 C 358.8 99.1 371.4 113.2 370.6 125.3 C 369.9 137.3 355.8 147.4 341.8 158.6 C 327.8 169.7 313.9 182.1 300.1 181.9 C 286.3 181.7 272.7 169.1 257.8 158.2 C 242.8 147.3 226.6 138.2 225.1 126.1 C 223.6 114 236.8 98.9 246.8 87.2 C 256.7 75.5 263.5 67.3 271.8 62.1 C 280.1 57 290.1 54.9 301.2 53.2 C 312.3 51.6 324.7 50.3 332.4 55.7 Z',
    'M 266.48 -88.86 C 268.02 -87.8 268.62 -85.4 270.18 -82.78 C 271.76 -80.18 274.28 -77.36 274.12 -74.94 C 273.98 -72.54 271.16 -70.52 268.36 -68.28 C 265.56 -66.06 262.78 -63.58 260.02 -63.62 C 257.26 -63.66 254.54 -66.18 251.56 -68.36 C 248.56 -70.54 245.32 -72.36 245.02 -74.78 C 244.72 -77.2 247.36 -80.22 249.36 -82.56 C 251.34 -84.9 252.7 -86.54 254.36 -87.58 C 256.02 -88.6 258.02 -89.02 260.24 -89.36 C 262.46 -89.68 264.94 -89.94 266.48 -88.86 Z'
];

const pathInterpolator = interpolatePath(paths[0], paths[1]);

const Character = () => {
    const [path, setPath] = useState(paths[0]);

    const handleScroll = useCallback((event) => {
        setPath(pathInterpolator(window.scrollY <= 1000 ? window.scrollY / 1000 : 1.0));
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <svg
            id="home__svg"
            style={{position: "fixed", top: 0, left: 0, zIndex: 0}}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 500 400"
            width="100%"
            height="1600"
            preserveAspectRatio="none"
        >
            <defs>
                <motion.path className="stars_clip" id="a" d={path}/>
            </defs>
            <use fill={"#003e8d"} fillOpacity="0.2" href="#a"/>
        </svg>
    );
};

export default Character;
