import React from 'react'
import Navbar from '../../Components/Navbar'
import Hero from './Components/Hero';
import Features from './Components/HouseCard';
import HouseCard from './Components/HouseCard';
import Explore from './Components/Explore';
import Specifications from './Components/Specifications';
import Ameneties from './Components/Ameneties';
import Location from './Components/Location';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

const UserDashboard = () => {
  const images = [
    { id: 1, thumbnail: '/assets/BG.png', full: '/assets/BG.png',title:'Orchid'},
    { id: 2, thumbnail: '/assets/BG2.png', full: '/assets/BG2.png',title:'Tulip' },
    { id: 3, thumbnail: '/assets/BG3.png', full: '/assets/BG3.png', title:'Iris'},
    // ...
  ];
  const houseCardImages = [
    { id: 1, thumbnail: '/features/features_1.webp'},
    { id: 2, thumbnail: '/features/features_2.webp'},
    { id: 3, thumbnail: '/features/features_3.webp'},
    { id: 4, thumbnail: '/features/features_4.webp'},
  ];
  const cards = [
    {id: 1, image : '/spesification/structure.webp', title: "Structure", description : "A asdasd sadasda asdasdas Earthquake Resistant Structure with attractive elevation as per Architecture's Design."},
    {id: 2, image : '/spesification/wall-finish.webp', title: "Wall Finish", description : "Inside Wall Plaster with Double Coat Putty Finish. Double Coat Plaster with Texture and Acrylic Paint on Exterior Walls."},
    {id: 3, image : '/spesification/door-windows.webp', title: "Doors & Windows", description : "Main Door Designer Flush Door with Wooden Frame & Natural Veneer. Motorized Main Door Lock. All Internal Door Locks, Stoppers a"},
  ]
  return (
    <div>
      <Navbar />
      <Hero images={images} />
      <h3 className='relative text-center text-[40px] mt-[20px] underline '>BUY OR RENT PROPERTIES</h3>

     <div className=' w-[100%] flex justify-center items-center gap-[5px] p-20 bg-[#f3f3fa]'>
    
     {houseCardImages.map((houseCardImage, index) => (
        
        <HouseCard
          key={index}
          houseCardImage={houseCardImage}
          price="250,000"
          filters={["3 bedrooms", "2 bathrooms", "2000 sqft"]}
        />
      
       
     ))}
     
     </div>
     <Explore />
     <Specifications cards={cards} />
     <Ameneties />
     <Location />
     <Contact />
     <Footer />
      </div>
  )
}

export default UserDashboard