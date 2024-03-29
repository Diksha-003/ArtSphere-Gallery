import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../utils/TokenUtil";

export function RedirectIfLoggedIn(props) {

    if (isAuthenticated()) {
        return <Navigate to={'/'}></Navigate>; 
    }
    return props.children;
}
