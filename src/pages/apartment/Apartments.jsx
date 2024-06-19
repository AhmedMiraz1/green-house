import { useEffect, useState } from "react";
import useApartment from "../../hooks/useApartment";
import Cover from "../shard/Cover";
import ApartmentCard from "./ApartmentCard";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const Apartments = () => {
     const axiosPublic = useAxiosPublic()

    const [itemsPerPage, setItemsPerPage]=useState(6)
    const [currentPage, setCurrentPage ]=useState(1)
    const [count, setCount]=useState(0)
    const [apartments, setApartments]=useState([])

    useEffect(()=>{
        const getData=async ()=> {
            const {data}=await axiosPublic(`/all-apartments?page=${currentPage}&size=${itemsPerPage}`)
            setApartments(data)
            // setCount(data.length)
        }
        getData()
    }, [axiosPublic, currentPage, itemsPerPage])

    useEffect(()=>{
        const getCount = async ()=> {
            const {data}= await axiosPublic('/apartments-count')
            setCount(data.count)
        }
        getCount()
    }, [axiosPublic])

    console.log('apartment', apartments);
    console.log('count',count);

    // const apartment = useApartment()
    // console.log(apartment);
    // setCount(apartment)

    // console.log(count);
    const numberOfPages = Math.ceil(count/itemsPerPage)

    const   pages = [...Array(numberOfPages).keys()].map(element => element+1)

    const handelPagination =(value)=> {
        console.log(value);
        setCurrentPage(value)
    }
    return (
        <div>

            <Cover/>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-between my-16">

           {
                apartments?.map(card => <ApartmentCard key={card._id} card={card}/>)
            }
           </div>

           <div className='flex justify-center mt-12'>
        <button
        disabled={currentPage === 1 }
         onClick={()=> handelPagination(currentPage - 1)}
        
         className='px-4 py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-gray-200 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-blue-500  hover:text-white'>
          <div className='flex items-center -mx-1'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-6 h-6 mx-1 rtl:-scale-x-100'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M7 16l-4-4m0 0l4-4m-4 4h18'
              />
            </svg>

            <span className='mx-1'>previous</span>
          </div>
        </button>

        {pages.map(btnNum => (
          <button
          onClick={()=> handelPagination(btnNum)}
            key={btnNum}
            className={`hidden ${currentPage === btnNum ? 'text-white bg-blue-500' : ""} px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline hover:bg-blue-500  hover:text-white`}
          >
            {btnNum}
          </button>
        ))}

        <button
        disabled={currentPage === numberOfPages }
         onClick={()=> handelPagination(currentPage + 1)}

        
         className='px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-blue-500 disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500'>
          <div className='flex items-center -mx-1'>
            <span className='mx-1'>Next</span>

            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-6 h-6 mx-1 rtl:-scale-x-100'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M17 8l4 4m0 0l-4 4m4-4H3'
              />
            </svg>
          </div>
        </button>
      </div>


            
        </div>
    );
};

export default Apartments;