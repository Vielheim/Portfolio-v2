import { Container } from "@mui/system";
import SectionSubtitle from "./SectionSubtitle";
import SectionTitle from "./SectionTitle";
import SkillDetails from "../common/SkillsDetails";
import { Stack, Typography } from "@mui/material";
import AppColors from "../common/AppColors";

const Skills = () => {
    return (
        <Container>
            {/* Title */}
            <SectionTitle>Skills 📜</SectionTitle>

            {/* SubTitle */}
            <SectionSubtitle>I learned some stuff</SectionSubtitle>

            {/* Content */}
            <Stack spacing={2}>
                {SkillDetails.map((category) => (
                    <div key={category}>
                        <Typography
                            variant="h6"
                            component="div"
                            gutterBottom
                            sx={{
                                fontFamily: "monospace",
                            }}
                        >
                            {category.title}
                        </Typography>

                        <Typography
                            variant="body1"
                            component="div"
                            gutterBottom
                            sx={{
                                fontFamily: "monospace",
                                color: AppColors.secondary,
                            }}
                        >
                            {category.content}
                        </Typography>
                    </div>
                ))}
            </Stack>
        </Container>
    );
};

export default Skills;
