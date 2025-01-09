import React, {useState} from "react";
import {Grid, useMediaQuery} from "@mui/material";
import Home from "Components/SubPage/Home";
import AboutMe from "Components/SubPage/AboutMe";
import Education from "Components/SubPage/Education";
import Experience from "Components/SubPage/Experience";
import PersonalProject from "Components/SubPage/PersonalProject";
import Footer from "Components/SubPage/Footer";

import useMouse from "@react-hook/mouse-position";
import {motion} from "framer-motion";
import theme from "../../theme";

const App = () => {
    const [cursorVariant, setCursorVariant] = useState("default");

    const ref = React.useRef(null);
    const mouse = useMouse(ref, {
        enterDelay: 100,
        leaveDelay: 100
    });

    let mouseXPosition = 0;
    let mouseYPosition = 0;

    if (mouse.x !== null) {
        mouseXPosition = mouse.clientX as number;
    }

    if (mouse.y !== null) {
        mouseYPosition = mouse.clientY as number;
    }

    const variants = {
        default: {
            opacity: 1,
            height: 30,
            width: 30,
            backgroundImage: `url('data:image/svg+xml,<svg width="30" height="30" viewBox="0 0 94 94" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M93.9998 47C94.0092 48.3732 93.591 49.7152 92.8032 50.84C92.0155 51.9647 90.8973 52.8165 89.6036 53.2772L62.9643 62.9644L53.2771 89.6038C52.8085 90.8922 51.9547 92.0051 50.8317 92.7916C49.7087 93.5781 48.371 94 47 94C45.629 94 44.2912 93.5781 43.1682 92.7916C42.0452 92.0051 41.1915 90.8922 40.7228 89.6038L31.0356 62.9644L4.39623 53.2772C3.10783 52.8085 1.99484 51.9548 1.20836 50.8318C0.421876 49.7088 0 48.371 0 47C0 45.629 0.421876 44.2912 1.20836 43.1683C1.99484 42.0453 3.10783 41.1915 4.39623 40.7229L31.0356 31.0356L40.7228 4.39624C41.1914 3.10783 42.0452 1.99484 43.1682 1.20836C44.2912 0.421877 45.6289 0 46.9999 0C48.3709 0 49.7087 0.421877 50.8317 1.20836C51.9547 1.99484 52.8084 3.10783 53.2771 4.39624L62.9643 31.0356L89.6036 40.7229C90.8972 41.1835 92.0155 42.0353 92.8032 43.16C93.5909 44.2848 94.0092 45.6269 93.9998 47Z" fill="%23D1D2EF"/></svg>')`,
            x: mouseXPosition,
            y: mouseYPosition,
            transition: {
                type: "spring",
                mass: 0.6
            }
        },
    };

    const spring = {
        type: "spring",
        stiffness: 500,
        damping: 28
    };

    const isScreenSmallerThanMD = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <div className="container" ref={ref}>
            {!isScreenSmallerThanMD &&
                <Grid item sx={{position: "absolute"}}>
                    <motion.div
                        variants={variants}
                        className="circle"
                        animate={cursorVariant}
                        transition={spring}
                    >
                    </motion.div>
                </Grid>
            }
            <Grid container>
                <Grid item xs={12}>
                    <Home/>
                </Grid>
                <Grid item xs={12}>
                    <AboutMe/>
                </Grid>
                <Education/>
                <Grid item xs={12} justifyContent={"center"} alignItems={"center"}>
                    <Experience/>
                </Grid>
                <Grid item xs={12}>
                    <PersonalProject/>
                </Grid>
                <Grid item xs={12}>
                    <Footer/>
                </Grid>
            </Grid>

        </div>
    );
}

export default App;