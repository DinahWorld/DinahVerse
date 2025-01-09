import React, {useState} from "react";
import {Grid, Typography, useMediaQuery} from "@mui/material";
import EducationProfile from "Components/SubPage/Education/Components/EducationProfile/EducationProfile";
import EducationInfo from "./Components/EducationInfo";
import Slidebar from "./Components/Slidebar";
import theme from "../../../theme";

const Education = () => {
    const progressBar = document.querySelector('#root');
    // @ts-ignore
    const [progressBarLength, setProgressBarLength] = useState<number>(progressBar.offsetWidth * 0.6);
    const [imageNumber, setImageNumber] = useState<number>(3);
    const ref = React.useRef(null);
    const [hookedYPosition, setHookedYPosition] = React.useState(0);

    const isScreenSmallerThanMD = useMediaQuery(theme.breakpoints.down('md'));

    const handleChangeImage = (newImageNumber: number) => {
        setImageNumber(newImageNumber);
    };

    return (
        <Grid item container xs={12}
              justifyContent={"center"} alignItems={"center"}
              sx={{
                  marginBottom: "20rem",
                  top: {xs: "0px", sm: "0rem", md: "-2rem", lg: "-3rem", xl: "-3rem"},
                  backgroundImage: "url(assets/my-noise.png)",
              }}
        >
            <Grid item
                  sx={{
                      position: "absolute", left: "0%"
                  }}>
                <img src={"assets/snake/snake-1.svg"} alt={""}/>
            </Grid>
            <Grid container item xs={11}>
                <Grid container item xs={12}
                      alignItems={"center"}
                      sx={{height: "100%", padding: "10px"}}
                      gap={{xs: 1, sm: 2, md: 2}}
                >
                    <Grid item container xs={12}
                          justifyContent={"center"}
                          alignItems={"center"}
                          sx={{height: "auto"}}
                    >
                        <Grid item container gap={2} justifyContent={"center"} alignItems={"center"}>
                            <Grid item container md={6} lg={6} xl={3} sm={11} xs={11} justifyContent={"center"}
                                  alignItems={"center"}>
                                <Grid item xs={"auto"} sm={"auto"} md={12} sx={{
                                    zIndex: "2",
                                }}>
                                    <Typography fontFamily={{xs: "Kotori Rose", sm: "Kotori Rose", md: "Bright"}}
                                                fontWeight={{xs: "bold", sm: "bold", md: "normal"}}
                                                textAlign={{xs: "center", sm: "center", md: "start"}}
                                                lineHeight={1}
                                                color={
                                                    imageNumber === 1 ? "#5D68FF" : (imageNumber === 2 ? "#FF5D5D" : "#0F1727")
                                                }
                                                sx={{
                                                    fontSize: {
                                                        xs: "4.2rem",
                                                        sm: "4.2rem",
                                                        md: "4.6rem",
                                                        lg: "5.5rem",
                                                        xl: "3.6rem"
                                                    }
                                                }}
                                    >
                                        Education
                                    </Typography>
                                </Grid>
                                {!isScreenSmallerThanMD && <EducationInfo imageNumber={imageNumber}/>}
                            </Grid>
                            <Grid item xs={'auto'}>
                                <EducationProfile imageNumber={imageNumber}/>
                            </Grid>

                            <Slidebar first={progressBarLength * 0.25}
                                      second={progressBarLength * 0.75}
                                      length={progressBarLength}
                                      imageNumber={imageNumber}
                                      onChangeImage={handleChangeImage}/>
                        </Grid>


                    </Grid>
                    {isScreenSmallerThanMD && <EducationInfo imageNumber={imageNumber}/>}
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Education;