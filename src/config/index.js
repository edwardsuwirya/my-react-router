import {themeConfig} from "./theme";
import {routerConfig} from "./routerNav";
import {localStorageConfig} from "./localStorage";
import {reduxStoreConfig} from "./reduxStore";
import {apiConfig} from "./api";


const appConfig = () => {
    const localstorage = localStorageConfig();
    const api = apiConfig(localstorage); // local storage untuk kebutuhan token interceptor
    const store = reduxStoreConfig();
    const appTheme = themeConfig();
    const router = routerConfig();
    return {
        api, store, router, localstorage, appTheme
    }
}
export default appConfig;
