import useAuth from "../../hooks/useAuth";

const MyProfile = () => {

    const {user}=useAuth()
  return (
    <div className="flex justify-center ">
      <div className="avatar  flex flex-col items-center border rounded-lg shadow-md p-6 bg-blue-500 text-white font-bold text-lg">
        <div className="w-40 rounded-full">
          <img src={user?.photoURL || "https://i.ibb.co/YfrC5vT/user-removebg-preview.png"} />
        </div>
        <p className="my-4">{user?.displayName }</p>
        <p>{user?.email}</p>
    
      </div>
      
    </div>
  );
};

export default MyProfile;
