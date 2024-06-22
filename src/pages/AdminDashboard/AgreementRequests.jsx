import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AgreementRequests = () => {
  const axiosSecure = useAxiosSecure();

    const { refetch, data: agreement = [] } = useQuery({
      queryKey: ["agreement"],
      queryFn: async () => {
        const res = await axiosSecure.get("/agreement");
        return res.data;
      },
    });

  console.log(agreement);

  
  const  handelMakeMember= (item)=>{
    console.log('item', item)
  
    axiosSecure.patch(`/users/member/${item._id}`, item)
    .then(res => {
        console.log(res.data);
        if(res.data.modifiedCount > 0){
            refetch()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title:  'Is member now!',
                showConfirmButton: false,
                timer: 1500
              });
        }
    })

  }

  const handelDelete = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/agreement/${user._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch()
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        console.log(res.data);
        });
      }
    });
  };

  console.log(agreement);
  return (
    <div>
    <div>
   
     
    </div>

    <div className="overflow-x-auto border my-6 rounded-t-2xl">
      <table className="table ">
        {/* head */}
        <thead>
          <tr className="uppercase bg-blue-500 text-white font-bold text-lg ">
            
            <th>Name</th>
            <th>email</th>
            <th>block_no</th>
            <th>Floor_no</th>
            <th>Rent</th>
            <th>Apartment_no</th>
            <th>Accept</th>
            <th>Reject</th>
          </tr>
        </thead>
        <tbody>
          {agreement?.filter(i => i.status !== "approved")?.map((user) => {
            console.log("user id", user)
            return (
              <tr key={user._id}>
                <th>{user .name}</th>
                <th>{user.email}</th>
                <td>{user?.block_name}</td>
                <td>{user?.floor_no}</td>
                <td>${user?.rent}</td>
                <td>{user?.apartment_no}</td>
                <td>
                  {user.role === "member" ? 
                    "Member"
                  : 
                    <button
  
                      onClick={() => handelMakeMember(user)}
                      className="btn  btn-xs bg-blue-500 text-white  px-4 "
                    >
                         Accept 
                      
                    </button>
                }
                </td>
                <td>
                  <button
                    onClick={() => handelDelete(user)}
                    className="btn btn-ghost btn-xs bg-red-600 text-white px-4 "
                  >
                    Reject
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  </div>
  );
};

export default AgreementRequests;
