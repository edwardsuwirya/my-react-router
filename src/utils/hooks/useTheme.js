import {useContext} from "react";
import {AppThemeContext} from "../contexts/themeContext";

export const useTheme = () => {
    return useContext(AppThemeContext);
}