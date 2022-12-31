import {themeConfig} from "./theme";
import {routerConfig} from "./routerNav";
import {localStorageConfig} from "./localStorage";
import {reduxStoreConfig} from "./reduxStore";
import {apiConfig} from "./apiService";


const appConfig = () => {
    const services = apiConfig();
    const store = reduxStoreConfig();
    const localstorage = localStorageConfig();
    const appTheme = themeConfig();
    const router = routerConfig(services, appTheme, localstorage);
    return {
        services, store, router, localstorage, appTheme
    }
}
export default appConfig;
