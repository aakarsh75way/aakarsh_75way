import React from "react";

const Explore = () => {
  return (
    <div className="min-h-screen relative bg-brand w-full bg-blend-multiply py-12" style={{ backgroundImage: 'url(/explore_images/explore-bg.webp)'}}>
      <div className="w-full max-w-screen-xl mx-auto flex  flex-col items-center space-y-12 p-2">
        <h1
          className={`text-2xl lg:text-4xl text-center lg:text-left text-white `}
        >
          Explore Homes
        </h1>

        <div className="flex gap-4">
          <button
            className={`h-10 bg-white rounded-md px-8  lg:px-10 text-primary hover:bg-green-100 bg-primary text-primary-foreground shadow hover:bg-primary/90`}
          >
            Orchid
          </button>
          <button
            className={`h-10 rounded-md px-8 bg-white  lg:px-10 text-primary hover:bg-green-100 bg-primary text-primary-foreground shadow hover:bg-primary/90`}
          >
            Tulip
          </button>
          <button
            className={`h-10 rounded-md px-8 bg-white  lg:px-10 text-primary hover:bg-green-100 bg-primary text-primary-foreground shadow hover:bg-primary/90`}
          >
            Iris
          </button>
        </div>
        <div className="grid grid-cols-5 w-full gap-4">
          <div className="w-full h-full col-span-3 relative">
            <img
              src="/explore_images/orchid.webp"
              alt="Orchid"
              className="object-cover"
              style={{ aspectRatio: 3 / 2 }}
            />
          </div>
          <div className="w-full h-full relative">
            <img
              src="/explore_images/orchid_floor_plan2.webp"
              alt="Orchid"
              className="object-cover cursor-pointer"
            />
          </div>
          <div className="w-full h-full relative">
            <img
              src="/explore_images/orchid_floor_plan2.webp"
              alt="Orchid"
              className="object-cover cursor-pointer"
            />
          </div>
        </div>
        <div className="grid grid-cols-5 w-full gap-4">
          <div className="w-full h-full col-span-5 lg:col-span-3 relative">
            <div className="flex flex-col text-white items-center justify-center lg:items-start relative">
              <h3
                className={`text-2xl lg:text-4xl text-center lg:text-start mb-4`}
              >
                Orchid
              </h3>

              <p className="font-light">25x50 PLOT AREA (WEST)</p>
              <p className="font-bold">1250 sqft</p>
              <p className="font-bold">Super Builtup Area </p>
              <p className="font-bold">2,097 Sqft</p>
            </div>
          </div>
          <div className="w-full h-full relative col-span-2 order-first md:mt-10  lg:order-last lg:col-span-1">
            <img
              src="/explore_images/orchid_isometric1.webp"
              alt="Orchid"
              className="object-cover overflow-visible"
            />
          </div>
          <div className="w-full h-full relative order-first col-span-2 md:mt-10  lg:order-last lg:col-span-1">
            <img
              src="/explore_images/orchid_isometric1.webp"
              alt="Orchid"
              style={{ aspectRatio: 3 / 2 }}
              className="object-cover overflow-visible"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
