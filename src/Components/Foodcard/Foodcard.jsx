import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const Foodcard = ({ item }) => {
    const { image, recipe, name, price,_id } = item;
    const { user } = useContext(AuthContext);
    const [ , refetch] = useCart()
    const navigate = useNavigate()
    const location = useLocation()

    const handleAddToCartt = (item) => {
        console.log(item);
        if (user && user.email) {

            const cartItem = {menuItemId : _id,name,image,price,email:user.email}

            fetch('https://bistro-boss-server-sultan-suvo.vercel.app/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'The fooded item in cart',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login to order food?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="absolute bg-slate-900 text-white px-4 right-0 mr-4 mt-4">${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p> {recipe}  </p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleAddToCartt(item)} className="btn btn-outline bg-slate-100 mt-2 border-0 border-orange-400 border-b-4">ADD to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Foodcard;