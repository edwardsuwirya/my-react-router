import {Outlet} from "react-router-dom";
import {ThemeProvider} from "styled-components";
import {useTheme} from "./utils/hooks/useTheme";

const App = () => {
    const theme = useTheme();
    return (
        <ThemeProvider theme={theme}>
            <Outlet/>
        </ThemeProvider>
    );
}

export default App;
