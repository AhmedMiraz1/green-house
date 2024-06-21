import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { FaTrashAlt, FaUserAlt } from "react-icons/fa";



const ManageMembers = () => {

    const axiosSecure = useAxiosSecure();

    const { refetch, data: users = [] } = useQuery({
      queryKey: ["users"],
      queryFn: async () => {
        const res = await axiosSecure.get("/users");
        return res.data;
      },
    });
  
  
    const  handelMakeAdmin= (user)=>{
  
      axiosSecure.patch(`/users/admin/${user._id}`)
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
          axiosSecure.delete(`/users/${user._id}`).then((res) => {
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
  return (
    <div>
      <div>
     
        <h2 className="text-3xl">Total users : {users?.length}</h2>
      </div>

      <div className="overflow-x-auto border my-6 rounded-t-2xl">
        <table className="table ">
          {/* head */}
          <thead>
            <tr className="uppercase bg-blue-500 text-white font-bold text-lg ">
              <th>no</th>
              <th>Name</th>
              <th>email</th>
              <th>Role</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, idx) => (
              <tr key={user._id}>
                <th>{idx + 1}</th>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>
                  {user.role === "admin" ? 
                    "Admin"
                  : 
                    <button
                      onClick={() => handelMakeAdmin(user)}
                      className="btn  btn-xs bg-blue-500 text-white  px-4 "
                    >
                        <FaUserAlt/>
                      
                    </button>
                }
                </td>
                <td>
                  <button
                    onClick={() => handelDelete(user)}
                    className="btn btn-ghost btn-xs bg-red-600 text-white px-4 "
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageMembers;
