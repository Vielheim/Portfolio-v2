import {
    SvgIcon,
    ListItemText,
    Stack,
    Typography,
    Tooltip,
} from "@mui/material";
import { Container } from "@mui/system";
import ExperiencesDetails from "../common/ExperiencesDetails";

const Experiences = () => {
    return (
        <Container>
            {/* Header */}
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

            {/* Content */}
            <Stack>
                {ExperiencesDetails.map((experience) => (
                    <div key={experience}>
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
                                    key={desc}
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
                        <Stack
                            direction="row"
                            sx={{ paddingY: "1rem" }}
                            spacing={1.5}
                        >
                            {experience.technologies.map((tech) => (
                                <Tooltip placement="bottom" title={tech.title}>
                                    <SvgIcon
                                        key="swift"
                                        viewBox="0 0 128 128"
                                        fontSize="large"
                                    >
                                        {tech.svg}
                                    </SvgIcon>
                                </Tooltip>
                            ))}
                        </Stack>
                    </div>
                ))}
            </Stack>
        </Container>
    );
};

export default Experiences;
