import {SERVICE} from "../constants";

const courseService = ({doGet}) => {
    const doGetCourse = async (page) => {
        return await doGet({
            url: `${SERVICE.COURSES}?page=` + page
        })
    }
    return {doGetCourse}
}

export default courseService;
