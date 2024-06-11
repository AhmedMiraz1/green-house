import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import errorPage from '../assets/404 .jpg'


const ErrorPage = () => {
    return (
        <section className="flex items-center h-full p-16 text-gray-100">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
            <div className="max-w-md text-center">
               
                <img className="shadow-lg border mb-6" src={errorPage} alt="" />
                <p className=" text-xl lg:text-2xl font-medium lg:font-semibold text-purple-600 ">Sorry, we couldn`t find this page.</p>
                <p className="mt-4 mb-8 text-blue-800 z-20">But don`t worry, you can find plenty of other things on our Homepage.</p>
                <Link to ="/" className="px-3 py-3 font-semibold rounded bg-green-500 text-white flex items-center gap-3 w-40 mx-auto  "> <span><FaArrowLeft /></span>Go To Home</Link>
            </div>
        </div>
    </section>
    );
};

export default ErrorPage;