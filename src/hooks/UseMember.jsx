import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const UseMember = () => {
    const {user, loading}=useAuth()
    const axiosSecure =useAxiosSecure()
    const {data: isMember, isPending: isMemberLoading} = useQuery({

        queryKey:[user?.email, 'isMember'],
        enabled:!loading  ,
        queryFn: async ()=> {

            // console.log('asking checking is admin ', user);
            const res = await axiosSecure.get(`/users/member/${user.email}`)

            console.log(res.data);
            return res?.data?.member 
        }
    })
    return [isMember, isMemberLoading]
};


export default UseMember;