import {SERVICE} from "../constants";

const courseService = ({doGet}) => {
    const doGetCourse = async (page, token) => {
        const config = {
            headers: {
                Authorization: `bearer ${token}`
            },
        };
        return await doGet({
            url: `${SERVICE.COURSES}?page=` + page, config: config
        })
    }
    return {doGetCourse}
}

export default courseService;
