import React from 'react'
const Hero = ({images}:any) => {
  return (
    <div className="w-full bg-[#CFEBF9] relative bg-no-repeat bg-cover min-h-screen overflow-x-hidden  overflow-y-hidden">
  <div className=" md:block">
        <img
      
          src="/assets/cloud.png"
          alt="cloud"
          className="absolute top-1 left-[10px] opacity-[1]"
          width={600}
        />
        
        </div>
        <div className=" md:block">
        <img

          src="/assets/cloud.png"
          alt="cloud"
          className="absolute  right-0 opacity-[1]"
          width={600}
        />
        </div>
      <div className="top-[50%] lg:mt-60 absolute left-0 lg:top-0 right-0 bottom-40 md:bottom-0 max-h-screen">
      <div
          className="relative w-full "
        >
          <img
           src='/assets/BG3.png'
            alt={"image"}
            width={"100%"}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover "
      
          />
        </div>
      </div>
      <div className="mt-[150px] h-full min-h-[80vh] lg:mt-60 z-10 lg:min-h-screen max-w-screen-xl mx-auto relative flex flex-col lg:flex-row justify-between">
        <div className="space-y-4 lg:space-y-8 p-2">
          <h1
            className={`text-3xl lg:text-5xl text-center lg:text-left `}
          >
           Our Home Defines Us
          </h1>
          <p className=" text-black text-center custom-heading text-md lg:text-xl  sm:text-center lg:text-left">    
          Revanta Homes is a project by Rishabhdeo Builders & Developers. They build homes with timeless designs. Thet build homes which are beyond your dreams.
</p>
        </div>
        <nav className="  w-2/4 min-w-[380px] max-w-md md:mt-0 p-2">
          <ul
            className="w-full grid grid-cols-3 gap-2"
          >
            {images.map((item:any, index:any) => (
              <li
                key={index}
                className={`${
                  item === "relative"
                } w-full h-full cursor-pointer`}
               
              >
              <img
                    src={item?.thumbnail}
                    
                    alt={"image"}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover shadow-lg"
                  />
                 
             
                
                    <p className="text-center">{item.title}</p>
                 
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Hero
