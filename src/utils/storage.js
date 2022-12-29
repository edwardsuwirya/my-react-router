export const storage = (storageEngine) => {
    const set = async (key, value) => {
        try {
            await storageEngine.setItem(key, value)
        } catch (e) {
            console.log(e)
        }
    }
    const get = async (key) => {
        try {
            const val = await storageEngine.getItem(key);
            return val;
        } catch (e) {
            console.log(e)
        }
    }

    return {
        get, set
    }
}