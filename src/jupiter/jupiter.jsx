import { NavLink } from "react-router-dom";

const jupiter = () => {
    return (
        <div className=" max-w-6xl mx-auto bg-[#070724] pb-10">
        <div className="flex flex-col md:flex-row lg:flex-row md:justify-around lg:justify-around max-w-6xl pt-5 lg:pt-20">
        <div className="w-[90%] md:w-[40%] lg:w-[30%] mx-auto  text-center">
        <div  className=" block md:hidden lg:hidden 
flex mb-8 border-t-2 gap-5  border-b-2  border-solid border-gray-500 p-2 
text-white justify-around text-center">
<NavLink to="/jupiter" className="w-[250px] flex rounded-lg ">
              
                OVERVIEW
        </NavLink>
<br />
     <NavLink to="/scoundjupiter" className="w-[250px] flex  rounded-lg ">
            
            Internal 
            </NavLink>
<br />
            <NavLink to="/thirdjupiter" className="w-[250px] flex rounded-lg ">
            
            Surface 
            </NavLink>
</div>
            <img className="w-full" src="/images/planet-jupiter.svg" alt="" />
          </div>
                   <div className="w-[90%] md:w-[40%] lg:w-[30%] mt-5 mb-5 text-center mx-auto ">
  <h1 className=" text-3xl lg:text-7xl text-white font-bold">jupiter</h1>
                    <p className="text-white mt-4">Jupiter is the fifth planet 
                    from the Sun and the largest in the Solar System. It is a gas 
                    giant with a mass two and a half times that of all the other planets
                     in the Solar System combined, but less
                     than one-thousandth the mass of the Sun.</p>
                     <div className=" hidden md:block lg:block
text-white w-[250px]  mt-12 text-center">
<NavLink to="/jupiter" className={({isActive})=> isActive ? ' bg-cyan-600 w-[250px] flex border-2 p-2 rounded-lg' : 'w-[250px] flex border-2 p-2 rounded-lg'}>
                <p className="mr-5 text-gray-500">01</p>
                OVERVIEW
        </NavLink>
<br />
            <NavLink to="/scoundjupiter" className={({isActive})=> isActive ? ' bg-cyan-600 w-[250px] flex border-2 p-2 rounded-lg' : 'w-[250px] flex border-2 p-2 rounded-lg'}>
            <p className="mr-5 text-gray-500">01</p>
            Internal Structure
            </NavLink>
<br />
            <NavLink to="/thirdjupiter" className={({isActive})=> isActive ? ' bg-cyan-600 w-[250px] flex border-2 p-2 rounded-lg' : 'w-[250px] flex border-2 p-2 rounded-lg'}>
            <p className="mr-5 text-gray-500">01</p>
            Surface Geology
            </NavLink>
</div>
                   </div>
        </div>
        <div className="flex flex-col space-y-4 md:flex-row items-center gap-10 md:gap-2 p-4 lg:flex-row md:justify-around lg:justify-around mt-10">
            <div className="text-center border-2 border-solid border-gray-700 rounded-lg p-3">
                <p className="text-white text-xl font-bold mb-2">ROTATION TIME</p>
                <h2 className="text-white text-4xl font-bold">9.93 hours</h2>
            </div>
            <div className="text-center border-2 border-solid border-gray-700 rounded-lg  p-3">
                <p className="text-white text-xl font-bold mb-2">REVOLUTION TIME</p>
                <h2 className="text-white text-4xl font-bold">11.86 years</h2>
            </div>
            <div className="text-center border-2 border-solid border-gray-700 rounded-lg  p-3">
                <p className="text-white text-xl font-bold mb-2">radius</p>
                <h2 className="text-white text-4xl font-bold">69,911 km</h2>
            </div>
            <div className="text-center border-2 border-solid border-gray-700 rounded-lg p-3">
                <p className="text-white text-xl font-bold mb-2">AVERAGE TEMP.</p>
                <h2 className="text-white text-4xl font-bold">-108°c</h2>
            </div>
         
        </div>
                </div>
    );
};

export default jupiter;