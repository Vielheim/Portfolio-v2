import {
    Container,
    createTheme,
    responsiveFontSizes,
    Stack,
    ThemeProvider,
    CssBaseline,
    Fab,
    Toolbar,
} from "@mui/material";
import PropTypes from "prop-types";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import "./App.css";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Experiences from "./components/Experiences";
import ScrollTop from "./components/ScrollTop";

let theme = createTheme({
    palette: {
        type: "light",
        primary: {
            main: "#fafafa",
        },
        secondary: {
            main: "#fff",
        },
    },
});

theme = responsiveFontSizes(theme);

ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
};

function App(props) {
    return (
        <ThemeProvider theme={theme}>
            {/* Header */}
            <CssBaseline />
            <Header />
            <Toolbar id="back-to-top-anchor" />

            {/* Content */}
            <Container
                sx={{
                    width: "80vw",
                    paddingY: "2rem",
                    paddingX: "1rem",
                }}
            >
                <Stack direction="column" spacing={10}>
                    <AboutMe />
                    <Experiences />
                </Stack>
            </Container>

            <ScrollTop {...props}>
                <Fab size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </ThemeProvider>
    );
}

export default App;
