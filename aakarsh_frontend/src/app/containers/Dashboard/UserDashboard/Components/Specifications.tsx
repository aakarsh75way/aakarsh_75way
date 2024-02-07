import React from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import "../../../../../styles.css"
const Specifications = ({cards}:any) => {
  return (
    <div className="py-14 relative w-full bg-[url('/Users/75way/Downloads/reduxsaga 2/public/spesification/element-bg.webp')] bg-right bg-contain bg-no-repeat flex items-center overflow-hidden">
      <div className="flex flex-col  lg:flex-row  lg:gap-10 w-full max-w-screen-xl mx-auto p-2">
        <div className="w-[100%] flex flex-col justify-center items-center lg:lg:flex-row  max-w-screen-xl mx-auto p-2 ">
        <div className="  sm:ml-0 sm:items-center sm:justify-center  md:items-center md:justify-center lg:items-stretch lg:justify-center lg:flex-none max-w-sm lg:col-span-1 flex flex-col gap-6 pl-2 justify-center">
          <h3
            className={`text-2xl lg:text-4xl text-center lg:text-left`}
          >
         Specifications
          </h3>
          <p className="text-center lg:max-w-[300px] max-w-max lg:text-start">
          We assure you that you'll get our best, as that's what we expect of ourselves.
          </p>
          <div className=" space-x-4 w-full flex justify-center lg:justify-start">
            <button className="rounded-none">
              <ChevronLeftIcon />
            </button>
            <button  className="rounded-none">
              <ChevronRightIcon />
            </button>
          </div>
          <p className="text-center lg:text-start">
    <span className=" text-brandSecodary">0/5 </span>
          </p>
        </div>
        </div>
      
         <div className='flex max-w-max max-h-max'>
              {cards.map((p:any, index:any) => {
                return (
                  <div key={index} className="shadow-lg my-4 max-w-max max-h-max">
                    <div className="p-2">
                      <div className="space-y-4">
                        <div className="cursor-pointer overflow-hidden relative">
                          <img
                            className="scale-1 hover:scale-[1.1] duration-300 object-cover w-[100%] h-[200px]"
                            src={p.image}
                            alt=""
                            style={{aspectRatio:4/3}}
                            
                          />
                          </div>
                        
                        <h3 className="font-bold text-lg text-center">{p.title}</h3>
                        <p className="text-center">{p.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
     </div>
          </div>
        </div>
     
  )
}

export default Specifications
