import axios from "axios";

const axiosPublic = axios.create({
    baseURL:'https://b9-12-server-lemon.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;