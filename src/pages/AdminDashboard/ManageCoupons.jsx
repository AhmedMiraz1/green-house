import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const ManageCoupons = () => {

    const {
        register,
        handleSubmit,
        reset
       
      } = useForm();
      const axiosSecure=useAxiosSecure()
     
    
      
  const onSubmit = async(data) => {
    console.log(data);
    const coupons ={
        code:data.code,
        discount: data.discount,
    description:data.description,
    }
    const couponsItem = await axiosSecure.post('/coupons', coupons)
    console.log(couponsItem.data);
    reset()
    if(couponsItem.data.insertedId){
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "announcement has been saved",
            showConfirmButton: false,
            timer: 1500
          });
    }
  };


    return (
        <div className="w-full md:w-1/2  mx-auto ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col md:flex-row gap-6">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">coupon code</span>
            </label>
            <input
              type="text"
              placeholder="Coupon code"
              className="input input-bordered"
              required
              {...register("code", { required: true })}
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">discount percentage</span>
            </label>
            <input
              type="number"
              placeholder="discount percentage"
              className="input input-bordered"
              required
              {...register("discount", { required: true })}
            />
          </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text"> Description</span>
            </label>
            <textarea
              className="p-10"
              {...register("description", { required: true })}
              id=""
              placeholder="Description"
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <input
              className="btn text-white font-bold text-xl bg-blue-500 mx-auto"
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
    );
};

export default ManageCoupons;