// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import useAgreement from "../../hooks/useAgreement";


const MakePayment = () => {

    const [cart] = useAgreement();

    // const axiosSecure = useAxiosSecure();

    // const {  data: agreement = [] } = useQuery({
    //   queryKey: ["agreement"],
    //   queryFn: async () => {
    //     const res = await axiosSecure.get("/agreement");
    //     return res.data;
    //   },
    // });

 
    return (
        <div>
      

      <div className="overflow-x-auto border my-6 rounded-t-2xl">
        <table className="table ">
          {/* head */}
          <thead>
            <tr className="uppercase bg-blue-500 text-white font-bold text-lg ">
              
              <th>Name</th>
              <th>email</th>
              <th>Floor_No</th>
              <th>Block_Name</th>
              <th>Room_No</th>
              <th>Rent</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody >
            {cart?.map((user) => (
              <tr key={user._id}>
                
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>{user?.floor_no}</td>
                <td>{user?.block_name}</td>
                <td>{user?.apartment_no}</td>
                <th>${user?.rent}</th>
                
                <td>
                 
                    <Link to='/dashboard/payment'>
                    <button
                      
                      className="btn  btn-xs bg-blue-500 text-white  px-4 "
                    >
                        Pay
                      
                    </button>
                    </Link>
                
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default MakePayment;