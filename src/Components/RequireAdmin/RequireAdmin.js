import React from 'react';
import {
    useLocation,
    Navigate,
} from "react-router-dom";
import auth from '../../FirebaseInit/Firerebase.Init';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../Loading/Loading';
import useAdmin from '../../Hooks/useAdmin';
import { signOut } from 'firebase/auth';
import toast from 'react-hot-toast';


const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);
    let location = useLocation();
    if (loading || adminLoading) {

        return <Loading></Loading>
    }
    if (!user || !admin) {
        toast.error("You can't access");
        signOut(auth)
        return <Navigate to='/signin' state={{ from: location }} replace />
    }
    return children;
};

export default RequireAuth;