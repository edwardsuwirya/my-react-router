import {useContext} from "react";
import {DepsContext} from "../contexts/dependencyContext";

export const useDeps = () => {
    return useContext(DepsContext);
}