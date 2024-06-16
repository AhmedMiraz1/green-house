

const ApartmentCard = ({card}) => {
    const {_id, image,apartment_no, block_name, floor_no, rent }=card
    return (
        <div className=" rounded-md shadow-md  text-gray-100">
        <img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72 " />
        <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2 text-blue-500 flex justify-between text-lg md:text-xl font-bold">
                <h2 className=""> Apartment : {apartment_no}</h2>
                <p className=""> Block : {block_name}</p>
            </div>
            <div className="space-y-2 text-blue-500 flex justify-between text-lg md:text-xl font-bold ">
                <h2 className=" "> Floor number : {floor_no}</h2>
                <p className="">Rent : ${rent}</p>
            </div>
            <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-blue-500 text-white btn text-lg md:text-xl ">Read more</button>
        </div>
    </div>
    );
};

export default ApartmentCard;