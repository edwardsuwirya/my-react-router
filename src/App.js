import './App.css';
import {Outlet} from "react-router-dom";
import {ThemeProvider} from "styled-components";
import {appTheme} from "./appTheme";

const App = () => {
    return (
        <ThemeProvider theme={appTheme}>
            <Outlet/>
        </ThemeProvider>
    );
}

export default App;
