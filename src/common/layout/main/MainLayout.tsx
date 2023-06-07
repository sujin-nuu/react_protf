import { Outlet } from "react-router-dom"

export const MainLayout = () => {
    return (
        <div style={{width:'100vw', height: '100vh'}}>
            <Outlet />
        </div>
    )
}