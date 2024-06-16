import useApartment from "../../hooks/useApartment";
import Cover from "../shard/Cover";
import ApartmentCard from "./ApartmentCard";


const Apartments = () => {

    const apartment = useApartment()
    console.log(apartment);
    return (
        <div>

            <Cover/>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-between my-16">

           {
                apartment[0]?.map(card => <ApartmentCard key={card._id} card={card}/>)
            }
           </div>


            
        </div>
    );
};

export default Apartments;