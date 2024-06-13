import { Link } from "react-router-dom";
import SocialLogin from "../shard/SocialLogin";
import signUp from '../../assets/login.jpg'


const SignUp = () => {
    return (
        <div className="mt-12 md:my-40   ">
      <div className=" flex flex-col  md:flex-row container mx-auto md:px-16 rounded-lg shadow-xl">
        <div className="w-full">
          <img className='h-[70vh] w-full hidden md:flex' src={signUp} alt="" />
        </div>
        <div className="  w-full  ">
          <form className="card-body">
            <h1 className='text-center font-bold text-4xl text-blue-500'> Welcome Back !</h1>
            <h2 className='text-center font-bold text-3xl my-7 text-blue-500'> Login to your account </h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
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
                <span className="label-text">Password</span>
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

          <p className='text-center mb-4 text-black text-lg font-bold'>Already have an account ? <Link to='/login' className='text-blue-500 font-bold text-lg md:text-xl'>Login</Link></p>
        </div>
      </div>
    </div>
    );
};

export default SignUp;