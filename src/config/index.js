import {serviceFactory} from "../services";
import {configureStore} from "../state/store";
import {routerFactory} from "../navigation/routerFactory";
import * as localforage from "localforage";
import {storage} from "../utils/storage";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faBookOpen, faLaptopCode, faSchool, faUserGraduate} from "@fortawesome/free-solid-svg-icons";


const appConfig = () => {
    const services = serviceFactory();
    const store = configureStore();
    const storageEngine = localforage.config({
        driver: localforage.WEBSQL,
        name: 'myApp',
        version: 1.0,
        size: 4980736,
        storeName: 'app',
        description: 'Login chanllenge'
    });
    const localstorage = storage(storageEngine);

    library.add(faLaptopCode, faBookOpen, faSchool, faUserGraduate)

    const appTheme = {
        main: "forestgreen",
        second: "darkgreen",
        textError: "tomato",
        textWhite: "whitesmoke",
        textPlaceholder: "lightgrey"
    };
    const router = routerFactory(services, appTheme, storage);

    return {
        services, store, router, localstorage, appTheme
    }
}
export default appConfig;
