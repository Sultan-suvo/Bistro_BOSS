import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllUsers = () => {
    const [axiosSecure] = useAxiosSecure()
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })

    const handleMakeAdmin = (user) => {
        fetch(`https://bistro-boss-server-sultan-suvo.vercel.app/users/admin/${user._id}`, {
            method: "PATCH",
         
        })
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                if(data.modifiedCount){
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Admin Now!!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    const handleDelete = () => {

    }

    return (
        <div>
            <Helmet>
                <title>Bositro Boss | All Users</title>

            </Helmet>
            <div className="overflow-x-auto w-full">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {
                                        user.role === "admin" ? "admin" :  <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost text-white bg-orange-600"><FaUserShield></FaUserShield></button>
                                    }
                                </td>
                                <td> <button onClick={() => handleDelete(user)} className="btn btn-ghost text-white bg-red-500"><FaTrashAlt></FaTrashAlt></button></td>
                            </tr>)
                        }



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;