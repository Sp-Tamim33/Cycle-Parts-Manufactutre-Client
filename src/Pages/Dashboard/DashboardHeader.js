import React from 'react';
import ActiveLink from '../../Components/ActiveLink/ActiveLink';
import { Icon } from '@iconify/react';
import useAdmin from '../../Hooks/useAdmin';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from '../../FirebaseInit/Firerebase.Init';

const DashboardHeader = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    return (
        <header class="text-white body-font border-b-2">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row">
                <nav class="flex flex-wrap items-center text-base">
                    <ActiveLink
                        to="profile"
                        className={`text-white hover:bg-orange-500 hover:text-black duration-500 px-3 py-2 rounded-md text-xl font-semibold mx-3 flex justify-center items-center`}
                    >
                        <Icon icon="gg:profile" />  My Profile
                    </ActiveLink>
                    <ActiveLink
                        to="orders"
                        className={`text-white hover:bg-orange-500 hover:text-black duration-500 px-3 py-2 rounded-md text-xl font-semibold mx-3 flex justify-center items-center   `}
                    >
                        <Icon icon="carbon:ibm-watson-orders" /> My Orders
                    </ActiveLink>
                    <ActiveLink
                        to="addrivew"
                        className={`text-white hover:bg-orange-500 hover:text-black duration-500 px-3 py-2 rounded-md text-xl font-semibold mx-3 flex justify-center items-center`}
                    >
                        <Icon icon="carbon:review" /> Add a Review
                    </ActiveLink>
                    {
                        admin && <ActiveLink
                            to="allusers"
                            className={`text-white hover:bg-orange-500 hover:text-black duration-500 px-3 py-2 rounded-md text-xl font-semibold mx-3 flex justify-center items-center`}
                        >
                            <Icon icon="bxs:user-check" /> All Users
                        </ActiveLink>
                    }
                </nav>
            </div>
        </header>
    );
};

export default DashboardHeader;