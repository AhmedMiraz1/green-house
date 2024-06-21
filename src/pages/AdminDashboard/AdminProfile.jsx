import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const AdminProfile = () => {
    const [apartments, setApartments]=useState([])

    const {user}=useAuth()
    const axiosPublic =useAxiosPublic()

    useEffect(()=>{
        const getCount = async ()=> {
            const {data}= await axiosPublic('/apartments')
            setApartments(data)
        }
        getCount()
    }, [axiosPublic])
    return (
        <div className="flex justify-center ">
      <div className="avatar  flex flex-col items-center  p-6 font-bold text-lg">
        <div className="w-40 rounded-full">
          <img src={user?.photoURL || "https://i.ibb.co/YfrC5vT/user-removebg-preview.png"} />
        </div>
        <p className="my-4">{user?.displayName }</p>
        <p>{user?.email}</p>
        <div>
            <p> Total Room : {apartments.length}</p>
        </div>
    
      </div>
      
    </div>
    );
};

export default AdminProfile;