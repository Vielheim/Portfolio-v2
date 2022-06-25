import { ListItem, ListItemText, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import ExperiencesDetails from "../common/ExperiencesDetails";

const Experiences = () => {
    return (
        <Container>
            <Typography
                variant="h4"
                component="div"
                gutterBottom
                sx={{
                    fontFamily: "monospace",
                    paddingBottom: "1rem",
                }}
            >
                Experience 🖥
            </Typography>

            <Stack>
                {ExperiencesDetails.map((experience) => (
                    <div>
                        {/* Company */}
                        <Typography
                            variant="h5"
                            component="div"
                            gutterBottom
                            sx={{
                                fontFamily: "monospace",
                            }}
                        >
                            {experience.company}
                        </Typography>

                        {/* Role and Period */}
                        <Stack
                            direction={{
                                xs: "column",
                                sm: "column",
                                md: "row",
                            }}
                            justifyContent={{
                                xs: "flex-start",
                                sm: "flex-start",
                                md: "space-between",
                            }}
                        >
                            <Typography
                                variant="h6"
                                component="div"
                                gutterBottom
                                sx={{
                                    fontFamily: "monospace",
                                }}
                            >
                                {experience.role}
                            </Typography>

                            <Typography
                                variant="h6"
                                component="div"
                                gutterBottom
                                sx={{
                                    fontFamily: "monospace",
                                }}
                            >
                                {experience.period}
                            </Typography>
                        </Stack>

                        {/* Description */}
                        <Container>
                            {experience.descriptionList.map((desc) => (
                                <ListItemText
                                    disableTypography={true}
                                    sx={{ display: "list-item" }}
                                >
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            fontFamily: "monospace",
                                        }}
                                    >
                                        {desc}
                                    </Typography>
                                </ListItemText>
                            ))}
                        </Container>

                        {/* Technologies */}
                    </div>
                ))}
            </Stack>
        </Container>
    );
};

export default Experiences;
