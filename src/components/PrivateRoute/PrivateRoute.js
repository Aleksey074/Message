import { Navigate, Outlet } from "react-router-dom";


export const PrivateRoute = ( {authed} ) => (  //принимает prop  авторизации
    authed ? <Outlet /> : <Navigate to="/" replace />
)