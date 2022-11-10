import { Container } from "@mui/system";
import SectionSubtitle from "./SectionSubtitle";
import SectionTitle from "./SectionTitle";
import SkillDetails from "../common/SkillsDetails";
import { Stack, Typography } from "@mui/material";
import AppColors from "../common/AppColors";
import { sans_serif, monospace } from "../common/Fonts";

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
                    <div key={category.title}>
                        <Typography
                            variant="h6"
                            component="div"
                            gutterBottom
                            sx={{
                                fontFamily: monospace,
                            }}
                        >
                            {category.title}
                        </Typography>

                        <Typography
                            variant="subtitle1"
                            component="div"
                            gutterBottom
                            sx={{
                                fontFamily: sans_serif,
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
