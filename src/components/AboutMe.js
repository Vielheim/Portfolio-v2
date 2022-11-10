import { Container, Divider, Typography } from "@mui/material";
import AboutMeDetails from "../common/AboutMeDetails";
import AppColors from "../common/AppColors";
import { monospace, sans_serif } from "../common/Fonts";

const AboutMe = () => {
    return (
        <Container>
            {/* Title */}
            <Typography
                variant="h4"
                component="div"
                gutterBottom
                sx={{
                    fontFamily: monospace,
                }}
            >
                {AboutMeDetails.title}
            </Typography>

            {/* SubTitle */}
            <Typography
                variant="h5"
                component="div"
                gutterBottom
                sx={{
                    fontFamily: monospace,
                }}
            >
                {AboutMeDetails.subtitle}
            </Typography>

            <Divider
                sx={{
                    marginY: "1rem",
                }}
            />

            {/* Body */}
            {AboutMeDetails.body.map((line) => (
                <Typography
                    key={line}
                    variant="subtitle1"
                    component="div"
                    gutterBottom
                    sx={{
                        fontFamily: sans_serif,
                        paddingY: "0.3rem",
                        color: AppColors.primary,
                    }}
                >
                    {line}
                </Typography>
            ))}

            {/* Closing */}
            <Typography
                variant="subtitle1"
                component="div"
                gutterBottom
                sx={{
                    fontFamily: sans_serif,
                    color: AppColors.primary,
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
