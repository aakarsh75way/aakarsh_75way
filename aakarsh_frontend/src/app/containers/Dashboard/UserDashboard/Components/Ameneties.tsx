import React from 'react'
import {
    BadmintonIcon,
    CctvIcon,
    CommunityIcon,
  
    GamesIcon,
    GardenIcon,
    GymIcon,
    PlayAreaIcon,
  } from "./icons";
const Ameneties = () => {
  return (
    <div className="bg-[#F7F4EB] relative w-full min-h-[80vh]" id="amenitiesSection">
    <div className="absolute top-0 left-0 bottom-0 right-0 items-center">
    <img
      src="/assets/features_element.svg"
      alt="Element Bg"

      className="mx-auto bg-cover"
    />
    </div>
      <div className="grid grid-cols-4 w-full max-w-screen-xl mx-auto p-2 ">
        <div className="col-span-4 lg:col-span-1 p-4 flex flex-col gap-6 pl-2 justify-center text-center lg:text-start">
          <h3
            className={`text-2xl lg:text-4xl text-center lg:text-left`}
          >
           Ameneties
          </h3>
          <p>
          We Consider every Aspect of aesthetic appeal and functionality .While Designing and Constructing the building 
          </p>
        
        </div>
        <div className="col-span-4 flex items-center justify-center lg:col-span-3 py-12 px-6 z-[100]">
          <div className="h-full flex gap-6 lg:flex-row ">
            <div className="lg:w-1/2 flex flex-col gap-12">
              <div className="flex flex-col lg:flex-row items-center gap-4">
                <span className="p-2 bg-brand w-20 h-20 flex justify-center items-center">
                  <PlayAreaIcon />
                </span>
                <p className="font-bold text-sm text-center"> Children Play Area</p>
              </div>
              <div className="flex flex-col lg:flex-row items-center gap-4">
                <span className="p-2 bg-brand w-20 h-20 flex justify-center items-center">
                  <GamesIcon />
                </span>
                <p className="font-bold text-sm  text-center">Indoor and Outdoor Games</p>
              </div>
              <div className="flex flex-col lg:flex-row items-center gap-4">
                <span className="p-2 bg-brand w-20 h-20 flex justify-center items-center">
                  <GymIcon />
                </span>
                <p className="font-bold text-sm text-center">Gymnasium</p>
              </div>
              <div className="flex flex-col lg:flex-row items-center gap-4">
                <span className="p-2 bg-brand w-20 h-20 flex justify-center items-center">
                  <BadmintonIcon />
                </span>
                <p className="font-bold text-sm  text-center">BAdminton Court</p>
              </div>
              <div className="flex flex-col lg:flex-row items-center gap-4">
                <span className="p-2 bg-brand w-20 h-20 flex justify-center items-center">
                  <CommunityIcon />
                </span>
                <p className="font-bold text-sm  text-center">Community Space</p>
              </div>
              
            </div>
            <div className=" lg:w-1/3 flex flex-col gap-12">
              <div className="flex flex-col lg:flex-row items-center gap-4">
                <span className="p-2 bg-brand w-20 h-20 flex justify-center items-center">
                  <GardenIcon />
                </span>
                <p className="font-bold text-sm  text-center">Rainwater Harvesting</p>
              </div>
              <div className="flex flex-col lg:flex-row items-center gap-4">
                <span className="p-2 bg-brand w-20 h-20 flex justify-center items-center">
                  <CctvIcon />
                </span>
                <p className="font-bold text-sm  text-center">Underground Drainage</p>
              </div>
              <div className="flex flex-col lg:flex-row items-center gap-4">
                <span className="p-2 bg-brand w-20 h-20 flex justify-center items-center">
                  <CctvIcon />
                </span>
                <p className="font-bold text-sm  text-center">Rainwater Harvesting</p>
              </div>
              <div className="flex flex-col lg:flex-row items-center gap-4">
                <span className="p-2 bg-brand w-20 h-20 flex justify-center items-center">
                  <CctvIcon />
                </span>
                <p className="font-bold text-sm  text-center">Children Play Area</p>
              </div>
              <div className="flex flex-col lg:flex-row items-center gap-4">
                <span className="p-2 bg-brand w-20 h-20 flex justify-center items-center">
                  <CctvIcon />
                </span>
                <p className="font-bold text-sm  text-center">Community Space</p>
              </div>
             

            </div>
          </div>
        </div>
      </div>
  </div>
  )
}

export default Ameneties