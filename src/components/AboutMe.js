import { Container, Divider, Typography } from "@mui/material";
import AboutMeDetails from "../common/AboutMeDetails";

// TODO: Update
const AboutMe = () => {
    return (
        <Container>
            <Typography
                variant="h4"
                component="div"
                gutterBottom
                sx={{
                    fontFamily: "monospace",
                }}
            >
                {AboutMeDetails.title}
            </Typography>

            <Typography
                variant="h5"
                component="div"
                gutterBottom
                sx={{
                    fontFamily: "monospace",
                }}
            >
                {AboutMeDetails.subtitle}
            </Typography>

            <Divider
                sx={{
                    marginY: "1rem",
                }}
            />

            {AboutMeDetails.body.map((line) => (
                <Typography
                    key={line}
                    variant="body1"
                    component="div"
                    gutterBottom
                    sx={{
                        fontFamily: "monospace",
                        paddingY: "0.3rem",
                    }}
                >
                    {line}
                </Typography>
            ))}

            <Typography
                variant="body1"
                component="div"
                gutterBottom
                sx={{
                    fontFamily: "monospace",
                }}
            >
                {AboutMeDetails.closing}

                <b style={{ textDecoration: "underline" }}>
                    {AboutMeDetails.email}
                </b>
            </Typography>
        </Container>
    );
};

export default AboutMe;
