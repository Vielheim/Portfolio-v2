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
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

function App(props) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            <Toolbar id="back-to-top-anchor" />

            <Container
                sx={{
                    width: "80vw",
                    paddingY: "3rem",
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
