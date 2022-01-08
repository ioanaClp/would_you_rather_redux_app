import { Navigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { redirectAfterLogin } from "../actions/navigation"

function PrivateRoute({ children, path }) {
    let auth = useSelector((store) => store.authedUser);
    let location = useLocation();
    const dispatch = useDispatch()

    if (!auth) {
        // Save to store that we need to redirect to a different path after login
        dispatch(redirectAfterLogin(location.pathname))
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}

export default PrivateRoute