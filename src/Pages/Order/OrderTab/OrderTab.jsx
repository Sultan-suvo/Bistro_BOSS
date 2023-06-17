import Foodcard from "../../../Components/Foodcard/Foodcard";


const OrderTab = ({items}) => {
    return (
        <div className='grid md:grid-cols-3 gap-10'>
        {
            items.map(item => <Foodcard
                key={item._id}
                item={item}
            ></Foodcard>)
        }
    </div>
    );
};

export default OrderTab;