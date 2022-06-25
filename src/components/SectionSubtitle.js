import { Typography } from "@mui/material";
import AppColors from "../common/AppColors";

const SectionSubtitle = (props) => {
    return (
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
            {props.children}
        </Typography>
    );
};

export default SectionSubtitle;
