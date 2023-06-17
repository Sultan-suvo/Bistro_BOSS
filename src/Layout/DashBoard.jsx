import { NavLink, Outlet } from "react-router-dom";
import { FaBook, FaCalendarAlt, FaHome, FaShoppingCart, FaUsers, FaUtensils, FaWallet } from 'react-icons/fa';
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const DashBoard = () => {
    const [cart] = useCart()
    // const isAdmin = true;
    const [isAdmin] = useAdmin()
    
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">


                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side bg-[#D1A054]">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80  text-base-content">
                        {
                            isAdmin ? <>

                                <li><NavLink to='/dashboard/adminhome'><FaHome></FaHome>Admin Home</NavLink></li>
                                <li><NavLink to='/dashboard/addItem'><FaUtensils></FaUtensils>Add an Item</NavLink></li>
                                <li><NavLink to='/dashboard/manageItems'><FaWallet></FaWallet>Manage Items</NavLink></li>
                                <li><NavLink to='/'><FaBook></FaBook>Manage Bookings</NavLink></li>
                                <li><NavLink to='/dashboard/allUsers'><FaUsers></FaUsers>All Users</NavLink></li>

                            </>
                                :
                                <>
                                    <li><NavLink to='/dashboard/userhome'><FaHome></FaHome>User Home</NavLink></li>
                                    <li><NavLink to='/'><FaCalendarAlt></FaCalendarAlt> Reservations</NavLink></li>
                                    <li><NavLink to='/'><FaWallet></FaWallet>Payment History</NavLink></li>
                                    <li><NavLink to='/dashboard/mycart'><FaShoppingCart></FaShoppingCart>My Cart
                                        <span className="badge badge-secondary">+{cart?.length || 0}</span>
                                    </NavLink></li>
                                </>
                        }


                        <div className="divider"></div>
                        <li><NavLink to='/'><FaHome></FaHome>Home</NavLink></li>
                        <li><NavLink to='/menu'> Reservations</NavLink></li>
                        <li><NavLink><FaWallet></FaWallet>Payment History</NavLink></li>
                        <li><NavLink><FaShoppingCart></FaShoppingCart>My Cart</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;