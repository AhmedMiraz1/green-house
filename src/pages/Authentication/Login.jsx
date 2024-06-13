import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../assets/login.jpg'
import SocialLogin from '../shard/SocialLogin';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';


const Login = () => {
  const { loginUser, } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handelLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          title: "User Login successfully",
          showClass: {
            popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `,
          },
          hideClass: {
            popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `,
          },
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const err = error.message;
        console.log(err);
      });
  };


  return (
    <div className="mt-12 md:my-40   ">
      <div className=" flex justify-center rounded-lg shadow-xl">
        <div className="w-full">
          <img className=' w-full hidden md:flex' src={login} alt="" />
        </div>
        <div className="  w-full   ">
          <form onSubmit={handelLogin} className="card-body">
            <h1 className='text-center font-bold text-4xl text-blue-500'> Welcome Back !</h1>
            <h2 className='text-center font-bold text-3xl my-7 text-blue-500'> Login to your account </h2>
           
            <div className="form-control">
              <label className="label">
                <span className="label-text"> Your Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered"
                required
                name="email"
              />
            </div>
           
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="input input-bordered"
                required
                name="password"
              />
            </div>
            <div className="form-control mt-6">
              <input
                className="btn text-white font-bold text-xl bg-blue-500"
                type="submit"
                value="Login"
              />
            </div>
          </form>
          <div className='px-8'>
            <SocialLogin/>
          </div>

          <p className='text-center  text-black text-lg font-bold'>New here ? <Link to='/signUp' className='text-blue-500 font-bold text-lg md:text-xl'>SignUp</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
