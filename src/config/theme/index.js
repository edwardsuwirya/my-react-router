import {library} from "@fortawesome/fontawesome-svg-core";
import {faBookOpen, faLaptopCode, faSchool, faUserGraduate} from "@fortawesome/free-solid-svg-icons";

export const themeConfig = () => {
    library.add(faLaptopCode, faBookOpen, faSchool, faUserGraduate)

    return {
        main: "forestgreen",
        second: "darkgreen",
        textError: "tomato",
        textWhite: "whitesmoke",
        textPlaceholder: "lightgrey"
    };
}