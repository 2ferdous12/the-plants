import { NavLink } from "react-router-dom";

const thirdneptune = () => {
    return (
        <div className=" max-w-6xl mx-auto bg-[#070724] pb-10">
        <div className="flex flex-col md:flex-row lg:flex-row md:justify-around lg:justify-around max-w-6xl pt-5 lg:pt-20">
        <div className="w-[90%] md:w-[40%] lg:w-[30%] mx-auto  text-center">
        <div  className=" block md:hidden lg:hidden 
flex mb-8 border-t-2 gap-5  border-b-2  border-solid border-gray-500 p-2 
text-white justify-around text-center">
<NavLink to="/neptune" className="w-[250px] flex rounded-lg ">
              
                OVERVIEW
        </NavLink>
<br />
     <NavLink to="/scoundneptune" className="w-[250px] flex  rounded-lg ">
            
            Internal 
            </NavLink>
<br />
            <NavLink to="/thirdneptune" className="w-[250px] flex rounded-lg ">
            
            Surface 
            </NavLink>
</div>
<div className="text-center  relative ">
<img className="w-full" src="/images/planet-neptune.svg" alt="" />
    <div className="w-[200px] left-20 top-[80%] text-center mx-auto absolute ">
        <img className="w-full " src="/images/geology-neptune.png" alt="" />
    </div>
    </div>
      
          </div>
                   <div className="w-[90%] md:w-[40%] lg:w-[30%] mt-[200px] md:mt-5 lg:mt-5 mb-5  text-center mx-auto ">
   <h1 className=" text-3xl lg:text-7xl text-white font-bold">Neptune</h1>
                    <p className="text-white mt-4">Neptune is the 
                    eighth and farthest-known Solar planet from the Sun.
                     In the Solar System, it is the fourth-largest planet 
                     by diameter, the third-most-massive planet, and the densest
                      giant planet. It is 17 times the mass of Earth,
                     more massive than its near-twin Uranus.</p>
                     <div className=" hidden md:block lg:block
text-white w-[250px]  mt-5 text-center">
<NavLink to="/neptune" className={({isActive})=> isActive ? ' bg-cyan-600 w-[250px] flex border-2 p-2 rounded-lg' : 'w-[250px] flex border-2 p-2 rounded-lg'}>
                <p className="mr-5 text-gray-500">01</p>
                OVERVIEW
        </NavLink>
<br />
            <NavLink to="/scoundneptune" className={({isActive})=> isActive ? ' bg-cyan-600 w-[250px] flex border-2 p-2 rounded-lg' : 'w-[250px] flex border-2 p-2 rounded-lg'}>
            <p className="mr-5 text-gray-500">01</p>
            Internal Structure
            </NavLink>
<br />
            <NavLink to="/thirdneptune" className={({isActive})=> isActive ? ' bg-cyan-600 w-[250px] flex border-2 p-2 rounded-lg' : 'w-[250px] flex border-2 p-2 rounded-lg'}>
            <p className="mr-5 text-gray-500">01</p>
            Surface Geology
            </NavLink>
</div>
                   </div>
        </div>
        <div className="flex flex-col space-y-4 md:flex-row items-center gap-10 md:gap-2 p-4 lg:flex-row md:justify-around lg:justify-around mt-10">
            <div className="text-center border-2 border-solid border-gray-700 rounded-lg p-3">
                <p className="text-white text-xl font-bold mb-2">ROTATION TIME</p>
                <h2 className="text-white text-4xl font-bold">16.08 hours</h2>
            </div>
            <div className="text-center border-2 border-solid border-gray-700 rounded-lg  p-3">
                <p className="text-white text-xl font-bold mb-2">REVOLUTION TIME.</p>
                <h2 className="text-white text-4xl font-bold">164.79 years</h2>
            </div>
            <div className="text-center border-2 border-solid border-gray-700 rounded-lg  p-3">
                <p className="text-white text-xl font-bold mb-2">radius.</p>
                <h2 className="text-white text-4xl font-bold">24,622 km</h2>
            </div>
            <div className="text-center border-2 border-solid border-gray-700 rounded-lg p-3">
                <p className="text-white text-xl font-bold mb-2">AVERAGE TEMP.</p>
                <h2 className="text-white text-4xl font-bold">-201°c</h2>
            </div>
         
        </div>
                </div>
    );
};

export default thirdneptune;