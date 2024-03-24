import { NavLink } from "react-router-dom";

const thirdearth = () => {
    return (
        <div className=" max-w-6xl mx-auto bg-[#070724] pb-10">
        <div className="flex flex-col md:flex-row lg:flex-row md:justify-around lg:justify-around max-w-6xl  pt-5 lg:pt-20">
        <div className="w-[90%] md:w-[40%] lg:w-[30%] mx-auto  text-center">
        <div  className=" block md:hidden lg:hidden 
flex mb-8 border-t-2 gap-5  border-b-2  border-solid border-gray-500 p-2 
text-white justify-around text-center">
<NavLink to="/earth" className="w-[250px] flex rounded-lg ">
              
                OVERVIEW
        </NavLink>
<br />
     <NavLink to="/scoundearth" className="w-[250px] flex  rounded-lg ">
            
            Internal 
            </NavLink>
<br />
            <NavLink to="/thirdearth" className="w-[250px] flex rounded-lg ">
            
            Surface 
            </NavLink>
</div>
<div className="text-center  relative ">
<img className="w-full" src="/images/planet-earth.svg" alt="" />
    <div className="w-[200px] left-20 top-[80%] text-center mx-auto absolute ">
        <img className="w-full " src="/images/geology-earth.png" alt="" />
    </div>
    </div>
          
          </div>
                   <div className="w-[90%] md:w-[40%] lg:w-[30%] mt-[200px] md:mt-5 lg:mt-5 mb-5  text-center mx-auto ">
    <h1 className=" text-3xl lg:text-7xl text-white font-bold">EARTH</h1>
                    <p className="text-white mt-4">Third planet from the Sun
                     and the only known planet to harbor life. About 29.2% of Earths 
                     surface is land with remaining 70.8% is covered with water. Earths 
                      distance from the Sun, physical properties and geological history 
                    have allowed life to evolve and thrive.</p>
                    <div className=" hidden md:block lg:block
text-white w-[250px]  mt-5 text-center">
<NavLink to="/earth" className={({isActive})=> isActive ? ' bg-cyan-600 w-[250px] flex border-2 p-2 rounded-lg' : 'w-[250px] flex border-2 p-2 rounded-lg'}>
                <p className="mr-5 text-gray-500">01</p>
                OVERVIEW
        </NavLink>
<br />
            <NavLink to="/scoundearth" className={({isActive})=> isActive ? ' bg-cyan-600 w-[250px] flex border-2 p-2 rounded-lg' : 'w-[250px] flex border-2 p-2 rounded-lg'}>
            <p className="mr-5 text-gray-500">01</p>
            Internal Structure
            </NavLink>
<br />
            <NavLink to="/thirdearth" className={({isActive})=> isActive ? ' bg-cyan-600 w-[250px] flex border-2 p-2 rounded-lg' : 'w-[250px] flex border-2 p-2 rounded-lg'}>
            <p className="mr-5 text-gray-500">01</p>
            Surface Geology
            </NavLink>
</div>
                   </div>
        </div>
        <div className="flex flex-col  space-y-4 md:flex-row items-center gap-10 md:gap-2 p-4 lg:flex-row md:justify-around lg:justify-around mt-10">
            <div className="text-center border-2 border-solid border-gray-700 rounded-lg p-3">
                <p className="text-white text-xl font-bold mb-2">ROTATION TIME</p>
                <h2 className="text-white text-4xl font-bold">0.99 days</h2>
            </div>
            <div className="text-center border-2 border-solid border-gray-700 rounded-lg  p-3">
                <p className="text-white text-xl font-bold mb-2">REVOLUTION TIME</p>
                <h2 className="text-white text-4xl font-bold">365.26 days</h2>
            </div>
            <div className="text-center border-2 border-solid border-gray-700 rounded-lg  p-3">
                <p className="text-white text-xl font-bold mb-2">radius</p>
                <h2 className="text-white text-4xl font-bold">6,371 km</h2>
            </div>
            <div className="text-center border-2 border-solid border-gray-700 rounded-lg p-3">
                <p className="text-white text-xl font-bold mb-2">AVERAGE TEMP.</p>
                <h2 className="text-white text-4xl font-bold">16°c</h2>
            </div>
         
        </div>
                </div>
    );
};

export default thirdearth;