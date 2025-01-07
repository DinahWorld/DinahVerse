import React from "react";
import {Grid, useMediaQuery, useTheme} from "@mui/material";
import AboutMePicture from "Components/SubPage/AboutMe/Components/AboutMePicture";
import AboutMeInfo from "Components/SubPage/AboutMe/Components/AboutMeInfo";

const AboutMe = () => {
    const theme = useTheme()
    const isScreenGreaterThaMD = useMediaQuery(theme.breakpoints.up('lg'));

    return (
        <>
            {/*<AboutMeBackground/>*/}
            <Grid container justifyContent={"center"} alignItems={"center"}
                  sx={{
                      minHeight: "100vh",
                      marginTop: "3rem",
                      marginBottom: "3rem"
                  }}
                  gap={8}
            >
                {isScreenGreaterThaMD &&
                    <Grid item container position="relative" xs={'auto'}>
                        <AboutMePicture/>
                    </Grid>
                }
                <Grid item container xs={11} sm={11} md={11} lg={5} xl={5} direction={"column"} gap={2}>
                    <Grid item container
                          xs={11} sm={11} md={6} lg={5}
                          gap={3}
                          sx={{
                              height: "80%",
                              padding: "1.5rem",
                              borderRadius: "1.5rem",
                              border: "2px solid #e5e7ff",
                              background: "radial-gradient(50% 50% at 50% 50%, rgba(180, 180, 180, 0.20) 0%, rgba(255, 255, 255, 0.09) 100%)",
                              backdropFilter: "blur(9.949999809265137px)"
                          }}
                    >
                        <AboutMeInfo/>
                    </Grid>

                </Grid>
            </Grid>
        </>
    );
}

export default AboutMe;