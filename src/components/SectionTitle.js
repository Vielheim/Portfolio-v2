import { Typography } from "@mui/material";
import { monospace } from "../common/Fonts";

const SectionTitle = (props) => {
    return (
        <Typography
            variant="h4"
            component="div"
            gutterBottom
            sx={{
                fontFamily: monospace,
            }}
        >
            {props.children}
        </Typography>
    );
};

export default SectionTitle;
