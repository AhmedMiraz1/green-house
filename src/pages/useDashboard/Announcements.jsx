import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const Announcements = () => {

    const axiosPublic=useAxiosPublic()
    const [announcement, setAnnouncement]=useState([])
    useEffect(()=>{
        const getCount = async ()=> {
            const {data}= await axiosPublic.get('/announcements')
            setAnnouncement(data)
        }
        getCount()
    }, [axiosPublic])
    // console.log(announcement);
    return (
        <div>
            {
                announcement?.map(announcement => <div key={announcement._id} className="flex justify-center items-center ">
                <div className="border text-white bg-blue-500 p-8 shadow-lg rounded-lg flex items-center flex-col">
                <h1 className="text-xl md:text-2xl font-bold mb-5">{announcement?.title} </h1>
                <p className="text-lg font-medium ">{announcement.description}</p>
                </div>
                
            </div>)
            }
        </div>
    );
};

export default Announcements;