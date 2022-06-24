import { createTheme, ThemeProvider } from "@mui/material";
import "./App.css";
import Header from "./components/Header";

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
            <>Body</>
        </ThemeProvider>
    );
}

export default App;
