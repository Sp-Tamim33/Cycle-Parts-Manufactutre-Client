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
        <header className="text-white body-font border-b-2">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row">
                <nav className="flex flex-wrap items-center text-base">
                    <ActiveLink
                        to="profile"
                        className={`text-white my-3 border border-orange-500 hover:bg-orange-500 hover:text-black duration-500 px-3 py-2 rounded-md text-xl font-semibold mx-3 flex justify-center items-center`}
                    >
                        <Icon icon="gg:profile" />  My Profile
                    </ActiveLink>
                    {
                        !admin && <ActiveLink
                            to="orders"
                            className={`text-white my-3 border border-orange-500 hover:bg-orange-500 hover:text-black duration-500 px-3 py-2 rounded-md text-xl font-semibold mx-3 flex justify-center items-center   `}
                        >
                            <Icon icon="carbon:ibm-watson-orders" /> My Orders
                        </ActiveLink>
                    }
                    {
                        !admin && <ActiveLink
                            to="addrivew"
                            className={`text-white my-3 border border-orange-500 hover:bg-orange-500 hover:text-black duration-500 px-3 py-2 rounded-md text-xl font-semibold mx-3 flex justify-center items-center`}
                        >
                            <Icon icon="carbon:review" /> Add a Review
                        </ActiveLink>
                    }
                    {
                        admin && <ActiveLink
                            to="allusers"
                            className={`text-white my-3 border border-orange-500 hover:bg-orange-500 hover:text-black duration-500 px-3 py-2 rounded-md text-xl font-semibold mx-3 flex justify-center items-center`}
                        >
                            <Icon icon="bxs:user-check" /> All Users*
                        </ActiveLink>
                    }
                    {
                        admin && <ActiveLink
                            to="addproduct"
                            className={`text-white my-3 border border-orange-500 hover:bg-orange-500 hover:text-black duration-500 px-3 py-2 rounded-md text-xl font-semibold mx-3 flex justify-center items-center`}
                        >
                            <Icon icon="fluent:tray-item-remove-24-filled" /> Add Product*
                        </ActiveLink>
                    }
                    {
                        admin && <ActiveLink
                            to="addblog"
                            className={`text-white my-3 border border-orange-500 hover:bg-orange-500 hover:text-black duration-500 px-3 py-2 rounded-md text-xl font-semibold mx-3 flex justify-center items-center`}
                        >
                            <Icon icon="cib:micro-blog" /> Add Blog*
                        </ActiveLink>
                    }
                    {
                        admin && <ActiveLink
                            to="manageproducts"
                            className={`text-white my-3 border border-orange-500 hover:bg-orange-500 hover:text-black duration-500 px-3 py-2 rounded-md text-xl font-semibold mx-3 flex justify-center items-center`}
                        >
                            <Icon icon="cib:micro-blog" /> Manage Products
                        </ActiveLink>
                    }
                </nav>
            </div>
        </header>
    );
};

export default DashboardHeader;