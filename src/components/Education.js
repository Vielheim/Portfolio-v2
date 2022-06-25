import {
    Stack,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    ListItemText,
    Container,
    Divider,
} from "@mui/material";
import SectionTitle from "./SectionTitle";
import SectionSubtitle from "./SectionSubtitle";
import EducationDetails from "../common/EducationDetails";
import AppColors from "../common/AppColors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Education = () => {
    return (
        <Container>
            {/* Title */}
            <SectionTitle>Education 📒</SectionTitle>

            {/* Subtitle */}
            <SectionSubtitle>Crippling Anxiety</SectionSubtitle>

            {/* Content */}
            {EducationDetails.map((education) => (
                <Accordion key={education.term} defaultExpanded={true}>
                    <AccordionSummary
                        key={education.term}
                        expandIcon={<ExpandMoreIcon />}
                        id={education.term}
                        aria-controls={education.period}
                    >
                        <Typography>{education.term}</Typography>
                    </AccordionSummary>

                    <AccordionDetails
                        id={education.period}
                        key={education.period}
                    >
                        {education.modules.map((module) => (
                            <Container key={module}>
                                <ListItemText
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
                                        {module}
                                    </Typography>
                                </ListItemText>
                            </Container>
                        ))}
                    </AccordionDetails>
                </Accordion>
            ))}
        </Container>
    );
};

export default Education;
