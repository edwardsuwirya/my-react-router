import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCourseList} from "../../state/courses/coursesAction";
import {useDeps} from "../../utils/hooks/useDeps";

const CoursePage = () => {
    const {services} = useDeps();
    const [currPage, setCurrPage] = useState(1)
    const dispatch = useDispatch();
    const coursesState = useSelector(state => state.coursesReducer);

    useEffect(() => {
        dispatch(getCourseList(() => services.courseService.doGetCourse(currPage)))
    }, [currPage]);

    return (<div>
        <h1>Course Page</h1>
        {coursesState?.isLoading && <div>Loading</div>}
        {coursesState?.courses && <div>{coursesState.courses.map((c) => <div key={c.id}>{c.name}</div>)}</div>}
        <button onClick={() => {
            setCurrPage((prevState) => prevState + 1)
        }}>Next
        </button>
    </div>);
};

export default CoursePage;
