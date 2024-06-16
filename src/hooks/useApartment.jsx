import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useApartment = () => {
    const axiosPublic=useAxiosPublic()
    console.log(axiosPublic);

    const {data:apartment=[], isPending:loading, refetch} =useQuery({
      queryKey:['apartment'],
      queryFn: async()=>{
  const res = await axiosPublic.get('/apartments')
  return res.data
      }
    })
    return [apartment, loading, refetch];
};

export default useApartment;

