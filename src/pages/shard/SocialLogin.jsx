import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const SocialLogin = () => {
    const { googleLogin } = useAuth();
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();
  
    const location = useLocation();
  
    const from = location.state?.from?.pathname || "/";
  
    const handelGoogleSignIn = async () => {
      try {
        const result = await googleLogin();
        console.log(result.user);
        const userInfo ={
          email: result.user?.email,
          name: result.user?.displayName
        }
        axiosPublic.post('/users', userInfo)
        .then(res => {
          console.log(res.data);
        })
  
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login successfully" ,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      } catch (err) {
        console.log(err);
        Swal.fire({
          icon: (err.message, "error"),
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
    };
    return (
        <div>
          <div className="flex items-center w-full my-4">
          <hr className="w-full text-blue-400" />
          <p className="px-3 text-blue-400">OR</p>
          <hr className="w-full text-blue-400" />
        </div>
        <div className="my-6 space-y-4">
          
          <button
            onClick={handelGoogleSignIn}
            className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-400 focus:ring-blue-500 btn-outline text-blue-500 font-bold text-lg md:text-xl"
          >
            <FaGoogle />
            <p>Login  with Google</p>
          </button>
        </div>
        
      </div>
    );
};

export default SocialLogin;