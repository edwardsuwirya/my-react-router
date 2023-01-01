import localforage from "localforage";
import {storage} from "../../utils/storage";

export const localStorageConfig = () => {
    const storageEngine = localforage.createInstance({
        driver: localforage.WEBSQL,
        name: 'myApp',
        version: 1.0,
        size: 4980736,
        storeName: 'app',
        description: 'Login challenge'
    });
    return storage(storageEngine);
}