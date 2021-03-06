import { Stack, Tooltip, SvgIcon } from "@mui/material";

const TechList = (props) => {
    const { technologies } = props;

    return (
        <Stack direction="row" sx={{ paddingY: "1rem" }} spacing={1.5}>
            {technologies.map((tech) => (
                <Tooltip key={tech.title} placement="bottom" title={tech.title}>
                    <SvgIcon viewBox="0 0 128 128" fontSize="large">
                        {tech.svg}
                    </SvgIcon>
                </Tooltip>
            ))}
        </Stack>
    );
};

export default TechList;
