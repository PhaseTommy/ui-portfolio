import { useEffect, useState } from "react";
import "./App.css";
import Routing from "./Routing";
import storage from "local-storage-fallback";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global.js";
import { lightTheme, darkTheme } from "./theme.js";

function App() {
    const getInitialTheme = () => {
        const savedTheme = storage.getItem("theme");
        return savedTheme ? JSON.parse(savedTheme) : { theme: "light" };
    };

    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        storage.setItem("theme", JSON.stringify(theme), [theme]);
    });

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyles />
            <div className="Appy">
                <Routing />
            </div>
        </ThemeProvider>
    );
}

export default App;
