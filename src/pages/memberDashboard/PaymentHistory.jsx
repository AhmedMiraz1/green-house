import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const PaymentHistory = () => {
    const {user}=useAuth();
    const axiosSecure=useAxiosSecure()
    const {data:payments = []}=useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async()=> {
              const res =  await axiosSecure.get(`/payments/${user.email}`)
              return res.data
        }
    })

    console.log(payments);
    return (
        
        <div className="overflow-x-auto rounded-t-2xl">
        <table className="table ">
          {/* head */}
          <thead>
            <tr className="uppercase bg-blue-600 text-white ">
              <th>no</th>
              <th>EMAIL</th>
              <th>transactionId</th>
              <th>TOTAL PRICE</th>
              <th>PAYMENT DATE</th>
            </tr>
          </thead>
          <tbody>
            {
              payments?.map((item, index) => <tr key={item._id}>
              <th>{index+1}</th>
              <td>{item?.email}</td>
              <td>{item?.transactionId}</td>
              <td>${item?.price}</td>
              <td>{new Date(item?.date).toLocaleDateString()}</td>
            </tr> )
            }
            
          
          </tbody>
        </table>
      </div>
    );
};

export default PaymentHistory;