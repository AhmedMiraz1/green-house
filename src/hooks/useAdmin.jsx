import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useAdmin = () => {

    const {user, loading}=useAuth()
    const axiosSecure =useAxiosSecure()
    const {data: isAdmin, isPending: isAdminLoading} = useQuery({

        queryKey:[user?.email, 'isAdmin'],
        enabled:!loading  ,
        queryFn: async ()=> {

            console.log('asking checking is admin ', user);
            const res = await axiosSecure.get(`/users/admin/${user.email}`)
            console.log('asking checking is admin or not  ', user);


            console.log('role', res.data);
            return res.data?.admin 
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;