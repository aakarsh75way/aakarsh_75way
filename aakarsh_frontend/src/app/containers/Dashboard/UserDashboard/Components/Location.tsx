import React from 'react'

const Location = () => {
  return (
    <div className="w-full min-h-[80vh] flex flex-col lg:flex-row" >
    <div className="bg-brand py-12 w-full lg:w-1/2  bg-blend-multiply bg-no-repeat" style={{ backgroundImage: 'url(/explore_images/explore-bg.webp)'}}>
        <div className="w-full h-full flex justify-center items-start">
            <div className=" max-w-sm h-full flex flex-col gap-6 justify-center p-2">
                <h1 className={`text-2xl lg:text-4xl text-center lg:text-left text-white`}>Strategic Location</h1>
                <p className=" text-white text-lg text-center sm:text-start">Presents an Exceptional residential Experience of life a Positive One  </p>
            </div>
        </div>
    </div>
    <div className="w-full lg:w-1/2 ">
        <iframe className="w-full h-full min-h-[50vh]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3266.930255767084!2d-122.08373528503417!3d37.42241007983677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1644164974480!5m2!1sen!2sus" width="600" height="450" style={{border: 0}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
</div>
  )
}

export default Location