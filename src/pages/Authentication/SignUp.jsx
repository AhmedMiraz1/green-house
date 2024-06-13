import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../shard/SocialLogin";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";


const SignUp = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
      const {createUser, updateUserProfile,  }=useAuth()
      const navigate = useNavigate()
    //   const axiosPublic =useAxiosPublic()

      const onSubmit = (data) => {
        console.log(data);
        createUser(data.email, data.password).then(result=> {
            const user = result.user
            console.log(user);
            updateUserProfile(data.name, data.photoURL)
            .then(()=> {
            //   const userInfo ={
            //     name:data.name,
            //     email: data.email
            //   }
            //   axiosPublic.post('/users', userInfo)
            //   .then(res=> {
            //     if(res.data.insertedId){
            //       console.log('user added to the database');
            //       reset();
            //       Swal.fire({
            //           position: "top-end",
            //           icon: "success",
            //           title: "User created successfully",
            //           showConfirmButton: false,
            //           timer: 1500
            //         });
            //         navigate('/')                                
            //     }
            //   })
                
            })
    
            .catch((error)=> {
                console.log(error.message);
            })
        })
       
    
      };

    return (
        <div className="mt-12 md:my-40   ">
      <div className=" w-full md:w-1/2 mx-auto rounded-lg shadow-xl">
       
        <div className="  w-full  ">
          <form onSubmit={handleSubmit(onSubmit)}  className="card-body">
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
               
                {...register("name", { required: true })}
              />
               {errors.name && (
                <span className="text-red-600">Name field is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered"
                required
              
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-600">Email field is required</span>
              )}
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
               
                {...register("photoURL", { required: true })}
              />
                {errors.photoURL && (
                <span className="text-red-600">Name field is required</span>
              )}
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
                {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern:
                      /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                  })}
              />
               {errors?.password?.type === "required" && (
                <span className="text-red-600">Password field is required</span>
              )}
              {errors?.password?.type === "minLength" && (
                <span className="text-red-600">
                  Password must be 6 characters{" "}
                </span>
              )}
              {errors?.password?.type === "maxLength" && (
                <span className="text-red-600">
                  Password must be less then 20 characters{" "}
                </span>
              )}
              {errors?.password?.type === "pattern" && (
                <span className="text-red-600">
                  Password must have one Uppercase one lowercase one number and
                  one special characters
                </span>
              )}
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