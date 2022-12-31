import {routerFactory} from "../../navigation/routerFactory";

export const routerConfig = (services, theme, storage) => {
    return routerFactory(services, theme, storage);
}