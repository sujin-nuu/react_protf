import { useRoutes } from "react-router-dom"
import { MainLayout } from "../common";
import * as paths from './const';
import { MainPage, NotFoundPage } from "../features";
import { ContactMainPage } from "src/features/contact";
import { PortfMainPage } from "src/features/portf";
import { CareerMainPage } from "src/features/career";

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
                        },
                        {
                            path: paths.ROUTE_CAREER,
                            element: <CareerMainPage />
                        },
                        {
                            path: paths.ROUTE_PORTFOLIO,
                            element: <PortfMainPage />
                        },
                        {
                            path: paths.ROUTE_CONTACT,
                            element: <ContactMainPage />
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