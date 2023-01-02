import {createBrowserRouter} from "react-router-dom";
import DashboardPage from "../pages/DashboardPage";
import {NAVIGATION} from "../constants";
import App from "../App";
import LoginPage from "../pages/LoginPage";
import ErrorPage from "../pages/ErrorPage";
import CoursePage from "../pages/CoursePage";
import CourseTypePage from "../pages/CourseTypePage";
import ProtectedRoute from "./ProtectedRoute";


export const routerFactory = (services, appTheme, localStorage) => createBrowserRouter(
    [
        {
            path: NAVIGATION.INDEX.path,
            element: <App theme={appTheme}/>,
            errorElement: <ErrorPage/>,
            children: [
                {index: true, element: <LoginPage service={services.authService} localStorage={localStorage}/>},
                // {index: true, element: <DashboardPage service={services.authService}/>},
                {
                    path: NAVIGATION.HOME_ROUTE.path,
                    element: <ProtectedRoute/>,
                    children: [
                        {index: true, element: <DashboardPage service={services.authService} localStorage={localStorage}/>},
                        {
                            path: NAVIGATION.COURSE_ROUTE.path,
                            element: <CoursePage service={services.courseService} localStorage={localStorage}/>,
                        },
                        {
                            path: NAVIGATION.COURSE_TYPE_ROUTE.path,
                            element: <CourseTypePage/>,
                        }
                    ]
                },
            ]
        },


    ]
);