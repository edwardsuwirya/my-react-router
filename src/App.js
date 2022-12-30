import {Outlet} from "react-router-dom";
import {ThemeProvider} from "styled-components";

const App = ({theme}) => {
    return (
        <ThemeProvider theme={theme}>
            <Outlet/>
        </ThemeProvider>
    );
}

export default App;
