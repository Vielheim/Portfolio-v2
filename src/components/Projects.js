import { Container, Stack, Typography } from "@mui/material";
import SectionTitle from "./SectionTitle";
import SectionSubtitle from "./SectionSubtitle";
import ProjectDetails from "../common/ProjectDetails";
import TechList from "./TechList";
import AppColors from "../common/AppColors";
import { sans_serif, monospace } from "../common/Fonts";

const Projects = () => {
    return (
        <Container>
            {/* Title */}
            <SectionTitle>Projects 🖥</SectionTitle>

            {/* Subtitle */}
            <SectionSubtitle>Sometimes I write code</SectionSubtitle>

            {/* Content */}
            <Stack spacing={4}>
                {ProjectDetails.map((project) => (
                    <div key={project.title}>
                        {/* Title */}
                        <Typography
                            variant="h5"
                            component="div"
                            gutterBottom
                            sx={{
                                fontFamily: monospace,
                            }}
                        >
                            {project.title}
                        </Typography>

                        {/* Description */}
                        <Typography
                            variant="subtitle1"
                            sx={{
                                fontFamily: sans_serif,
                                color: AppColors.secondary,
                            }}
                        >
                            {project.description}
                        </Typography>

                        {/* Tech stack */}
                        <TechList technologies={project.technologies} />
                    </div>
                ))}
            </Stack>
        </Container>
    );
};

export default Projects;
