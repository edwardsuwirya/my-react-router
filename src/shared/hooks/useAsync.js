import useViewState from "./useViewState";

const useAsync = () => {
    const {viewState, setLoading, setData, setError} = useViewState();

    const asyncReq = async (req) => {
        setLoading(true);
        try {
            const res = await req();
            setData(res);
        } catch (e) {
            console.log(e)
            setError(e);
        }
    }

    return [asyncReq, viewState];
}

export default useAsync;