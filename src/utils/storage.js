export const storage = (storageEngine) => {
    const set = async (key, value) => {
        try {
            await storageEngine.setItem(key, value)
        } catch (e) {
            console.log(e)
            throw new Error(e);
        }
    }
    const get = async (key) => {
        try {
            return await storageEngine.getItem(key);
        } catch (e) {
            console.log(e);
            throw new Error(e);
        }
    }
    const clear = async () => {
        try {
            await storageEngine.clear();
        } catch (e) {
            console.log(e)
            throw new Error(e);
        }
    }

    return {
        get, set, clear
    }
}