import {themeConfig} from "./theme";
import {routerConfig} from "./routerNav";
import {localStorageConfig} from "./localStorage";
import {reduxStoreConfig} from "./reduxStore";
import {apiConfig} from "./api";


const appConfig = () => {
    const localstorage = localStorageConfig();
    const api = apiConfig(localstorage);
    const store = reduxStoreConfig();
    const appTheme = themeConfig();
    const router = routerConfig(api, appTheme, localstorage);
    return {
        api, store, router, localstorage, appTheme
    }
}
export default appConfig;
