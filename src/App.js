import {
    Container,
    createTheme,
    responsiveFontSizes,
    ThemeProvider,
} from "@mui/material";
import "./App.css";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";

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

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Header />
            <Container
                sx={{
                    width: "80vw",
                    paddingY: "3rem",
                    paddingX: "1rem",
                }}
            >
                <AboutMe />
            </Container>
        </ThemeProvider>
    );
}

export default App;
