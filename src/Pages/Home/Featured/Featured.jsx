import SectionTitle from "../../../Components/sectionTitle/sectionTitle";
import featured from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle
                subHeading='check it out'
                heading='Featured Item'
            ></SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-12 md:px-36">
                <div>
                    <img src={featured} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20,2020</p>
                    <p className="uppercase">where can i get some</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quas veritatis magnam explicabo pariatur eligendi at commodi dignissimos eum, voluptatem illo quidem temporibus qui? Illo facilis ad sapiente, temporibus veritatis explicabo dolor odit voluptates neque quos similique corporis voluptatum laboriosam sunt esse voluptas vitae impedit quisquam eos fugit? Recusandae, aliquam?</p>
                    <button className="btn btn-outline mt-2 border-0 border-b-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;