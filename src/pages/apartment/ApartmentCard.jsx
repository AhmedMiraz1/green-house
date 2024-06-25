import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import PropTypes from 'prop-types';


const ApartmentCard = ({card}) => {
    const {_id, image,apartment_no, block_name, floor_no, rent }=card


    const { user } = useAuth();
    const navigate = useNavigate();
    const location =useLocation()
    const axiosSecure =useAxiosSecure()
    // const [, refetch]=useCart()
  
    
  
    const handelAddToAgreement = () => {
      if (user && user.email) {
        // TODO :
       const cartItem ={
        menuId :_id,
        email:user.email,
        name:user.displayName,
        floor_no,
        apartment_no,
        block_name,
        rent,
        status : "pending" 
       }
       axiosSecure.post('/agreement', cartItem )
       .then(res => {
        console.log(res.data);
        if(res.data.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: 'Add your apartment ',
            showConfirmButton: false,
            timer: 2000
          });
        //   refetch();
        }
       })
        
      } 
      
      else {
        Swal.fire({
          title: "You are not logged in  ",
          text: "Please login and add to the cart?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes,Login! ",
        }).then((result) => {
          if (result.isConfirmed) {
            // send the user login page
            navigate("/login", {state:{from:location}} );
            // console.log(navigate);
          }
        });
      }
    };
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
            <button 
            onClick={handelAddToAgreement}
             type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-blue-500 text-white btn text-lg md:text-xl ">Agreement</button>
        </div>
    </div>
    );
};

export default ApartmentCard;

ApartmentCard.propTypes={
  card:PropTypes.object.isRequired
}