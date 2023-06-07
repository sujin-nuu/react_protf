import { useRoutes } from "react-router-dom"
import { MainLayout } from "../common";
import * as paths from './const';
import { MainPage, NotFoundPage } from "../features";

export const MainRouter =() =>{
    
    const mainRoutes = useRoutes([
        {
            path: paths.ROUTE_ROOT,
            children: [
                {
                    element: <MainLayout />,
                    children: [
                        {
                            path: paths.ROUTE_MAIN,
                            element: <MainPage />
                        }
                    ]
                }
            ]
        },
        {
            path: "*",
            element: <></>,
            errorElement: <NotFoundPage />,
        }
    ]);

    return mainRoutes;
}