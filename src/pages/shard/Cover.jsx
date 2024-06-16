

import { Parallax } from 'react-parallax';
import imgBg from '../../assets/apartment_banner.jpg'


const Cover = () => {

   
  return (
    <Parallax
    blur={{ min: -50, max: 50 }}
    bgImage={imgBg}
    bgImageAlt="the dog"
    strength={-200}
>
<div
      className="hero min-h-[60vh] mb-12 opacity-50 px-56 py-40"
      
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md text-white">
          <h1 className="mb-5 text-5xl font-bold uppercase">Modern Apartment</h1>
          <p className="mb-5 uppercase text-white">A stylish apartment with all modern amenities and a comfortable living space.
          
          </p>
         
        </div>
      </div>
    </div>
</Parallax>
    
  );
};

export default Cover;