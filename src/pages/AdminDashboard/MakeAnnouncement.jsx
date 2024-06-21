import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const MakeAnnouncement = () => {
  const {
    register,
    handleSubmit,
    reset
    // watch,
    // formState: { errors },
  } = useForm();
  const axiosSecure=useAxiosSecure()
 

  const onSubmit = async(data) => {
    console.log(data);
    const announcement ={
        title:data.title,
        description:data.description,
    }
    const announcementItem = await axiosSecure.post('/announcement', announcement)
    console.log(announcementItem.data);
    reset()
    if(announcementItem.data.insertedId){
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
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input
            type="text"
            placeholder="Title"
            className="input input-bordered"
            required
            {...register("title", { required: true })}
          />
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

export default MakeAnnouncement;
