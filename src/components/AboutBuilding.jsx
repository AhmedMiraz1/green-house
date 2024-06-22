import image from '../assets/apartment_banner.jpg'

const AboutBuilding = () => {
    return (
       <div className='my-16'>

        <h1 className="text-center text-2xl md:text-3xl  my-8 text-blue-600 font-bold uppercase underline">About the building</h1>
       
         <div className=" flex justify-between flex-col-reverse lg:flex-row gap-6">
      <div className=" w-full lg:w-[50%] text-center space-y-5 shadow-lg ">
        <h1 className="text-xl md:text-2xl lg:text-3xl text-blue-500 font-bold">Luxurious Living in the Heart of the City</h1>
        <p className="text-base font text-gray-400">
        Experience the pinnacle of modern living in our exquisite apartment complex, designed with your comfort and style in mind.
        </p>

        <div className="shadow-lg p-2">
            <h1 className="text-green-500 font-bold text-xl">Open-Concept Living :-</h1>
        <p className="text-gray-500 mt-3"> Enjoy an expansive living space with high ceilings and large windows that flood the apartment with natural light.</p></div>
        <div className="shadow-lg p-2"><h1 className="text-green-500 font-bold text-xl">Gourmet Kitchen:-</h1>
        <p className="text-gray-500 mt-3" >  Equipped with state-of-the-art appliances, sleek countertype, and ample storage, perfect for culinary enthusiasts.</p></div>
        <div className="shadow-lg p-2">
        <h1 className="text-green-500 font-bold text-xl">Master Suite:-</h1>
        <p className="text-gray-500 mt-3">A serene retreat featuring a walk-in closet and an en-suite bathroom with premium fixtures.</p>

        </div>
        <div className="shadow-lg p-2">
            <h1 className="text-green-500 font-bold text-xl">Guest Rooms:-</h1>
            <p className="text-gray-500 mt-3"> Comfortable and versatile, ideal for family, friends, or a home office.
</p>
        </div>
      </div>
      <div className="w-full lg:w-[50%] p-4 shadow-md ">
        <img className="min-h-[70vh]" src={image} alt="" />
      </div>
    </div>
       </div>
    );
};

export default AboutBuilding;