import {createBrowserRouter} from "react-router-dom";
import DashboardPage from "../pages/DashboardPage";
import {NAVIGATION} from "../constants";
import App from "../App";
import LoginPage from "../pages/LoginPage";
import ErrorPage from "../pages/ErrorPage";
import CoursePage from "../pages/CoursePage";
import CourseTypePage from "../pages/CourseTypePage";


export const routerFactory = (services) => createBrowserRouter(
    [
        {
            path: NAVIGATION.INDEX,
            element: <App/>,
            errorElement: <ErrorPage/>,
            children: [
                {index: true, element: <LoginPage service={services.authService}/>},
                {
                    path: NAVIGATION.HOME_ROUTE,
                    element: <DashboardPage service={services.authService}/>,
                    children: [
                        {
                            path: NAVIGATION.COURSE_ROUTE,
                            element: <CoursePage/>,
                        },
                        {
                            path: NAVIGATION.COURSE_TYPE_ROUTE,
                            element: <CourseTypePage/>,
                        }
                    ]
                },
            ]
        },


    ]
);