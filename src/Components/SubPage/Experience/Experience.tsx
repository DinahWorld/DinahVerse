import React from "react";
import {Grid, Typography} from "@mui/material";
import ExperienceCard from "../Experience/Component/ExperienceCard";

const Experience = () => {
    return (
        <Grid container item xs={12} justifyContent={"center"} alignItems={"center"}
        >

            <Grid container item gap={4} xs={11}>
                <Grid item sx={{position: "absolute", zIndex: "-1", left: "0%"}} xs={12}>
                    <img src={"assets/snake/snake-2.svg"} alt={""} style={{width: "100%"}}/>
                </Grid>
                <Grid container item xs={12} justifyContent={{xs: "center", sm: "start"}}>
                    <Grid item xs={'auto'}>
                        <Typography
                            fontFamily={"Bright"}
                            lineHeight={1}
                            color={"#4A42A9"}
                            sx={{fontSize: {xs: "3.8rem", sm: "5rem", md: "6rem", lg: "6rem", xl: "6rem"}}}
                        >
                            Experience
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid item xs={12} sm={12} md={6}>
                            <Typography fontSize={"1rem"} color={"#4A42A9"}>
                                I have achieved experience in software development through internships,
                                working on back-end and front-end projects in Java, JavaFX, and Spring Boot.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container item xs={12} gap={10} justifyContent={"center"} alignItems={"center"}>
                    <ExperienceCard
                        job={2}
                        competencies={4}
                        url={"assets/experience/sg.png"}
                        deg={-10}
                        title={"VIE : Software Engineer"}
                        location={"Wan Chai, Hong Kong"}
                        company={"Societe Generale CIB"}
                        date={"2025/01 - Present"}
                        description={"As a Software Engineer in the Front Office, I work on a project that processes incoming data to calculate P&L metrics for traders.\n"}
                    />
                    <ExperienceCard
                        job={1}
                        competencies={1}
                        url={"assets/experience/bnp.png"}
                        deg={10}
                        title={"Apprenticeship : Software Engineer"}
                        location={"Paris, France"}
                        company={"BNP Paribas CIB"}
                        date={"2022/09 - 2024/09"}
                        description={"In the Middle Office, I was responsible for managing client portfolios and data. I contributed to a Spring Boot project featuring a monolithic architecture, where I developed REST APIs and controllers to enhance system functionality and maintainability. My work also included programming batch applications and migration jobs using Scala and Spark.\n" +
                            "\n" +
                            "I focused on optimizing memory usage in the Java Virtual Machine (JVM) through refactoring, significantly improving application performance. Additionally, I implemented DevOps practices utilizing Jenkins and monitored system performance and resource usage with Grafana. To foster collaboration and enhance project outcomes, I applied Scrum methodology using JIRA.\n" +
                            "\n"}
                    />
                    <ExperienceCard
                        job={2}
                        competencies={2}
                        url={"assets/experience/chart.png"}
                        deg={-10}
                        company={"Laboratoire CHart"}
                        location={"Saint-Denis, France"}
                        date={"2022/04 - 2022/07"}
                        title={"Internship : Software Engineer"}
                        description={"During my internship as a Software Developer, I was immersed in Java development, specifically JavaFX.\n\n" +
                            "My primary responsibilities included crafting new user interface components using JavaFX, enhancing the user experience of existing applications, and optimizing software performance.\n\n" +
                            "This experience not only honed my Java and JavaFX skills but also exposed me to the broader spectrum of software development, user-centric design, and IoT implementation."
                        }
                    />
                    <ExperienceCard
                        job={3}
                        competencies={3}
                        url={"assets/experience/p8.png"}
                        deg={13}
                        location={"Saint-Denis, France"}
                        company={"Universite Paris VIII"}
                        date={"2021/09 - 2021/12"}
                        title={"Student Tutor : Computer Science"}
                        description={"During my role as a Student Tutor, I actively engaged in fostering students' comprehension of fundamental computer science concepts.\n" +
                            "This involved mentoring students to troubleshoot technical issues, providing valuable technical support for both hardware and software problems."}
                    />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Experience;