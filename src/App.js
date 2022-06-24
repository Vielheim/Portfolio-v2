import { Container, createTheme, ThemeProvider } from "@mui/material";
import "./App.css";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";

function App() {
    const theme = createTheme({
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

    return (
        <ThemeProvider theme={theme}>
            <Header />
            <Container
                sx={{
                    width: "80vw",
                    padding: "3rem",
                }}
            >
                <AboutMe />
            </Container>
        </ThemeProvider>
    );
}

export default App;
