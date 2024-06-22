import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const MemberProfile = () => {

    const {user}=useAuth()
    const axiosPublic=useAxiosPublic()
    const [agreement, setAgreement]=useState([])
    useEffect(()=>{
        const getCount = async ()=> {
            const {data}= await axiosPublic.get('/agreement')
            setAgreement(data)
        }
        getCount()
    }, [axiosPublic])
    // console.log(agreement);
    return (
        <div >
           <div className="flex justify-center ">
      <div className="avatar  flex flex-col items-center   p-6 text-white font-bold text-lg">
        <div className="w-40 rounded-full">
          <img src={user?.photoURL || "https://i.ibb.co/YfrC5vT/user-removebg-preview.png"} />
        </div>
        <p className="my-4">{user?.displayName }</p>
        <p>{user?.email}</p>
    
      </div>
      
    </div>

    {
        agreement.map(agreement => <div key={agreement._id} className="flex  flex-col md:flex-row mb-6 justify-center gap-8">
            <p>Block No : {agreement.block_name}</p>
            <p>Floor No : {agreement.floor_no}</p>
            <p> Room No : {agreement.apartment_no}</p>
            
        </div>)
    }
            
        </div>
    );
};

export default MemberProfile;