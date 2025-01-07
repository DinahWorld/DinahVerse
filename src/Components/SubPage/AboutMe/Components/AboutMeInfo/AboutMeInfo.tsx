import {Avatar, Grid, Typography, useMediaQuery} from "@mui/material";
import StackIcon from "../../../../StackIcon";
import React from "react";
import theme from "../../../../../theme";

const AboutMeInfo = () => {
    const isScreenLowerThanMD = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <>
            <Grid container item xs={12} gap={2}>
                <Grid item container xs={12} justifyContent={"space-between"} alignItems={"center"}>
                    <Grid item xs={'auto'}>
                        <Typography fontWeight={"bold"} fontSize={"2rem"} color={"#2e2e2e"}>Hi, I’m Dinath
                            👋🏾</Typography>
                    </Grid>
                    {isScreenLowerThanMD &&
                        <Grid item xs={'auto'}>
                            <Avatar alt="Dinath Sunthararajah" src={"assets/avatar/avatar.png"}
                                    sx={{width: "50px", height: "50px"}}/>
                        </Grid>
                    }
                </Grid>
                <Grid container item xs={12} gap={2}>
                    <Grid item xs={12}>
                        <Typography fontSize={"1rem"} color={"#2e2e2e"}>
                            <strong>I am Dinath Sunthararajah, a 23-year-old </strong>driven by an insatiable passion
                            for
                            technology and
                            innovation. Currently based in Hong Kong, I am on a VIE (Volontariat International en
                            Entreprise)
                            program, working as a Software Engineer at Societe Generale CIB.

                            <br/><br/>
                            <strong>Currently honing my skills and gaining valuable experience</strong>,, I focus on
                            back-end development,
                            contributing to impactful projects that leverage technology to transform the world.
                            <br/><br/>
                            <strong>Beyond the technological realm,</strong> I am an enthusiastic traveler, captivated
                            by the richness of
                            cultures in the World 🌏.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container item xs={12} sm gap={1}>
                <Grid item xs={12}>
                    <Typography fontSize={"1.2rem"} fontWeight={"bold"}>
                        Skills
                    </Typography>
                </Grid>
                <Grid container item xs={12} gap={1} alignItems={"center"}>
                    <Grid item xs={'auto'}>
                        <StackIcon img={"assets/stack/spring_boot.svg"}/>
                    </Grid>
                    <Grid item xs={'auto'}>
                        <StackIcon img={"assets/stack/java.svg"}/>
                    </Grid>
                    <Grid item xs={'auto'}>
                        <StackIcon img={"assets/stack/react.svg"}/>
                    </Grid>
                    <Grid item xs={'auto'}>
                        <StackIcon img={"assets/stack/vuejs.svg"}/>
                    </Grid>
                    <Grid item xs={'auto'}>
                        <StackIcon img={"assets/stack/postgresql.svg"}/>
                    </Grid>
                    <Grid item xs={'auto'}>
                        <StackIcon img={"assets/stack/cassandra.svg"}/>
                    </Grid>
                    <Grid item xs={'auto'}>
                        <StackIcon img={"assets/stack/spark.svg"}/>
                    </Grid>
                    <Grid item xs={'auto'}>
                        <StackIcon img={"assets/stack/jira.svg"}/>
                    </Grid>
                    <Grid item xs={'auto'}>
                        <StackIcon img={"assets/stack/docker.svg"}/>
                    </Grid>

                    <Grid item xs={'auto'}>
                        <StackIcon img={"assets/stack/jenkins.svg"}/>
                    </Grid>
                    <Grid item xs={'auto'}>
                        <StackIcon img={"assets/stack/figma.svg"}/>
                    </Grid>
                    <Grid item xs={'auto'}>
                        <StackIcon img={"assets/stack/git.svg"}/>
                    </Grid>
                    <Grid item xs={'auto'}>
                        <StackIcon img={"assets/stack/bash.svg"}/>
                    </Grid>
                    <Grid item xs={'auto'}>
                        <StackIcon img={"assets/stack/unity.svg"}/>
                    </Grid>
                    <Grid item xs={'auto'}>
                        <StackIcon img={"assets/stack/blender.svg"}/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container item xs={12} gap={1}>
                <Grid item xs={12}>
                    <Typography fontSize={"1.2rem"}
                                fontWeight={"bold"}
                    >
                        Languages
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography fontSize={"0.9rem"}>
                        French - English - Tamil
                    </Typography>
                </Grid>
            </Grid>
        </>
    )
}

export default AboutMeInfo;