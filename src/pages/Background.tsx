import React, {useState} from "react";
import {motion, useViewportScroll} from "framer-motion";

const Character = () => {
    const [hasScrolled, setHasScrolled] = useState(false);
    const {scrollY} = useViewportScroll();
    const outputRange = [
        `
    M 0 0 v 32 c 86 13.5 107 51 171 80 s 148 31 223 46.5 c 130 27 183 108 330 108 s 202 -81 332 -108 c 75 -15.5 159 -17.5 223 -46.5 s 85 -67 171 -80 V 0 H 0 z
    `,
        `
    M 0 0 v 992 c 63 1 133 -1 189 0 s 104 4 215 6 c 124 -1 215 4 322 6 s 183 2 325 -1 c 111 2 173 -2 233 -3 s 96 1 233 5 V 0 H 0 z
    `
    ];
    const clip_path_variants = {
        open: {
            d: outputRange[0]
        },
        closed: {
            d: outputRange[1]
        }
    };
    scrollY.onChange((value) => {
        if (value > 100) {
            setHasScrolled(true);
        } else {
            setHasScrolled(false);
        }
    });

    const fill = "#232323";

    return (
        <svg
            id="home__svg"
            style={{left: 0, top: "-10px"}}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1450 360"
        >
            <defs>
                <motion.path
                    className="stars_clip"
                    id="a"
                    d="M 0 0
                      v 64
                      c 86 27 107 102 171 160
                      s 148 62 223 93
                      c 130 54 183 216 330 216
                      s 202 -162 332 -216
                      c 75 -31 159 -35 223 -93
                      s 85 -134 171 -160
                      V 0
                      H 0
                      z"
                    variants={clip_path_variants}
                    animate={hasScrolled ? "closed" : "open"}
                    transition={{
                        ease: "easeInOut",
                        duration: 0.5
                    }}
                />
            </defs>
            <use fill={fill} overflow="visible" href="#a"/>
            <clipPath id="b">
                <use overflow="visible" href="#a"/>
            </clipPath>
        </svg>
    );
};

export default Character;
