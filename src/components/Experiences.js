import {
    SvgIcon,
    ListItemText,
    Stack,
    Typography,
    Tooltip,
} from "@mui/material";
import { Container } from "@mui/system";
import ExperiencesDetails from "../common/ExperiencesDetails";
import AppColors from "../common/AppColors";

const Experiences = () => {
    return (
        <Container>
            {/* Title */}
            <Typography
                variant="h4"
                component="div"
                gutterBottom
                sx={{
                    fontFamily: "monospace",
                }}
            >
                Experience 🖥
            </Typography>

            {/* Subtitle */}
            <Typography
                variant="subtitle"
                component="div"
                gutterBottom
                sx={{
                    fontFamily: "monospace",
                    paddingBottom: "1rem",
                    fontStyle: "oblique",
                    color: AppColors.primary,
                }}
            >
                It ain't much, but it's honest work
            </Typography>

            {/* Content */}
            <Stack spacing={4}>
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
                                    color: AppColors.primary,
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
                                    color: AppColors.primary,
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
                                            color: AppColors.secondary,
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
