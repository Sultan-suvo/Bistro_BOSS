import SectionTitle from "../../../Components/sectionTitle/sectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {

    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')
    return (
        <section className="mb-12">
            <SectionTitle
                heading='From Our Menu'
                subHeading="Popular Items"
            >
            </SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popular.map(item => <MenuItem
                    key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
           <div className="text-center mt-4">
           <button className="btn btn-outline mt-2 border-0 border-b-4">View full menu</button>
           </div>
        </section>
    );
};

export default PopularMenu;