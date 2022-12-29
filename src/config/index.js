import {serviceFactory} from "../services";
import {configureStore} from "../state/store";
import {routerFactory} from "../navigation/routerFactory";
import * as localforage from "localforage";
import {storage} from "../utils/storage";

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
    const router = routerFactory(services, storage);
    return {
        services, store, router, localstorage
    }
}
export default appConfig;
