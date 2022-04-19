import { Navigate, Outlet } from "react-router-dom";


export const PublicRoute = ( {authed} ) => (  //принимает prop  авторизации
    !authed ? <Outlet /> : <Navigate to="profile" replace />
)