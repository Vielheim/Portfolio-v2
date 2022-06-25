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
import SectionTitle from "./SectionTitle";
import SectionSubtitle from "./SectionSubtitle";
import TechList from "./TechList";

const Experiences = () => {
    return (
        <Container>
            {/* Title */}
            <SectionTitle>Experience 💼</SectionTitle>

            {/* Subtitle */}
            <SectionSubtitle>
                It ain't much, but it's honest work
            </SectionSubtitle>

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
                        <TechList technologies={experience.technologies} />
                    </div>
                ))}
            </Stack>
        </Container>
    );
};

export default Experiences;
