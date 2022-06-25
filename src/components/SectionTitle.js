import { Typography } from "@mui/material";

const SectionTitle = (props) => {
    return (
        <Typography
            variant="h4"
            component="div"
            gutterBottom
            sx={{
                fontFamily: "monospace",
            }}
        >
            {props.children}
        </Typography>
    );
};

export default SectionTitle;
