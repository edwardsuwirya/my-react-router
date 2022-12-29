import {serviceFactory} from "../services";
import {configureStore} from "../state/store";
import {appRouter} from "../navigation/appRouter";

const appConfig = () => {
    const services = serviceFactory();
    const store = configureStore();
    const router = appRouter(services);
    return {
        services, store, router
    }
}
export default appConfig;
