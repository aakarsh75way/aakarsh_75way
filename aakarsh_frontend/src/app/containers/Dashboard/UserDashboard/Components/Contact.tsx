import React from 'react'

const Contact = () => {
  return (
    <div className="py-14 relative w-full  bg-right bg-contain bg-no-repeat flex items-center overflow-hidden"  style={{ backgroundImage: 'url(/spesification/element-bg.webp)'}}>
      <div className="w-full p-2 max-w-screen-xl mx-auto h-full flex flex-col justify-center gap-6">
        <h1
          className={`text-2xl lg:text-4xl text-center lg:text-left`}
        >
      Get In Touch
        </h1>
        <p className="text-center lg:text-left">
       Please Kindly fill Out form Below,We will get back to you soon
        </p>
        <div className=" flex gap-6 max-w-xl">
          <input type="text" name="name" placeholder="Name" className="flex h-9 w-full  border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 rounded-none" />
          <input type="email" name="email" placeholder="Email" className="flex h-9 w-full  border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 position relative rounded-none" />
        </div>
        <div className="max-w-xl flex flex-col gap-3">
          <input type="number" name="phone" placeholder="Phone Number" className=" flex h-9 w-full border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 rounded-none" />
        </div>
       
        
        <button
       
          className="h-10 rounded-md px-8 lg:max-w-sm bg-primary text-primary-foreground shadow hover:bg-primary/90 bg-gray-400"
      
        >
        Send Message
        </button>
      </div>
    </div>
  )
}

export default Contact