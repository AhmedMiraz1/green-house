import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const AgreementRequests = () => {

    const{user}=useAuth()
  const axiosPublic = useAxiosPublic();

  const { refetch, data: agreement = [] } = useQuery({
    queryKey: ["agreement"],
    queryFn: async () => {
      const res = await axiosPublic.get("/agreement");
      return res.data;
    },
  });

  console.log(agreement);

  const  handelMakeMember= (user)=>{
  
    axiosPublic.patch(`/users/member/${user._id}`)
    .then(res => {
        console.log(res.data);
        if(res.data.modifiedCount > 0){
            refetch()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title:  'Is Admin now!',
                showConfirmButton: false,
                timer: 1500
              });
        }
    })

  }
  return (
    <div>
      {
        agreement?.map(agreement => <div key={agreement._id} className="flex flex-col md:flex-row justify-between border rounded-xl shadow-xl p-8">
            <div>
              <p>Name : {agreement?.name}</p>
              <p className="my-6"> Email : {agreement?.email}</p>
              <p> Floor No : {agreement?.floor_no}</p>
            </div>
            <div>
                <p> Block Name : {agreement?.block_name}</p>
                <p className="my-6">Room No   : {agreement?.apartment_no}</p>
                <p> Rent : ${agreement?.rent}</p>
            </div>
            <div className="flex flex-col ">
                <input type="date" />

                {
                    user.role === 'member'? 'Member': <button
                    onClick={() => handelMakeMember(user)}
                    className="my-3 btn bg-green-500 text-white">Accept</button>
                }
                <button className="btn bg-red-500 text-white">Reject</button>
            </div>
            </div>)
      }
    </div>
  );
};

export default AgreementRequests;
