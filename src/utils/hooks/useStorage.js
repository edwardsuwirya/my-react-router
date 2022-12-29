import {useState} from "react";
import config from "../../config";

const useStorage = (keyName, defaultValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const value = config.localStorage.get(keyName);

            if (value) {
                return value;
            } else {
                if (defaultValue !== null) {
                    config.localStorage.set(keyName, defaultValue);
                }
                return defaultValue;
            }
        } catch (err) {
            return defaultValue;
        }
    });
    const setValue = (newValue) => {
        try {
            // if (newValue === null) {
            //     window.localStorage.removeItem(keyName);
            //     return
            // }
            config.localStorage.set(keyName, newValue);
            setStoredValue(newValue);
        } catch (err) {
            throw err
        }
    };
    return [storedValue, setValue];
}
export default useStorage;