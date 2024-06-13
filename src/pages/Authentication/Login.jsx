import { Link } from 'react-router-dom';
import login from '../../assets/login.jpg'
import SocialLogin from '../shard/SocialLogin';


const Login = () => {
  return (
    <div className="mt-12 md:my-40   ">
      <div className=" w-full md:w-1/2 mx-auto rounded-lg shadow-xl">
        {/* <div className="w-full">
          <img className=' w-full hidden md:flex' src={login} alt="" />
        </div> */}
        <div className="  w-full   ">
          <form className="card-body">
            <h1 className='text-center font-bold text-4xl text-blue-500'> Welcome Back !</h1>
            <h2 className='text-center font-bold text-3xl my-7 text-blue-500'> Login to your account </h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="name"
                placeholder="Enter your email"
                className="input input-bordered"
                required
                name="name"
              />
            </div>
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
                <span className="label-text">Your Photo URL </span>
              </label>
              <input
                type="text"
                placeholder="Enter your email"
                className="input input-bordered"
                required
                name="photo"
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
