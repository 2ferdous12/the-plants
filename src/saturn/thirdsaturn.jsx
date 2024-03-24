import { NavLink } from "react-router-dom";

const thirdsaturn = () => {
    return (
        <div className=" max-w-6xl mx-auto bg-[#070724] pb-10">
        <div className="flex flex-col md:flex-row lg:flex-row md:justify-around lg:justify-around max-w-6xl pt-5 lg:pt-20">
        <div className="w-[90%] md:w-[40%] lg:w-[30%] mx-auto  text-center">
        <div  className=" block md:hidden lg:hidden 
flex mb-8 border-t-2 gap-5  border-b-2  border-solid border-gray-500 p-2 
text-white justify-around text-center">
<NavLink to="/saturn" className="w-[250px] flex rounded-lg ">
              
                OVERVIEW
        </NavLink>
<br />
     <NavLink to="/scoundsaturn" className="w-[250px] flex  rounded-lg ">
            
            Internal 
            </NavLink>
<br />
            <NavLink to="/thirdsaturn" className="w-[250px] flex rounded-lg ">
            
            Surface 
            </NavLink>
</div>
<div className="text-center  relative ">
<img className="w-full" src="/images/planet-saturn.svg" alt="" />
    <div className="w-[200px] left-20 top-[80%] text-center mx-auto absolute ">
        <img className="w-full " src="/images/geology-saturn.png" alt="" />
    </div>
    </div>
   
          </div>
                   <div className="w-[90%] md:w-[40%] lg:w-[30%]  mt-[200px] md:mt-5 lg:mt-5 mb-5 text-center mx-auto ">
  <h1 className=" text-3xl lg:text-7xl text-white font-bold">saturn</h1>
    <p className="text-white mt-4">Saturn is the sixth planet from the
     Sun and the second-largest in the Solar System, after Jupiter. It is 
     a gas giant with an average radius of about nine and a half times that
      of Earth. 
    It only has one-eighth the average density of Earth.</p>
    <div className=" hidden md:block lg:block
text-white w-[250px]  mt-12 text-center">
<NavLink to="/saturn" className={({isActive})=> isActive ? ' bg-cyan-600 w-[250px] flex border-2 p-2 rounded-lg' : 'w-[250px] flex border-2 p-2 rounded-lg'}>
                <p className="mr-5 text-gray-500">01</p>
                OVERVIEW
        </NavLink>
<br />
            <NavLink to="/scoundsaturn" className={({isActive})=> isActive ? ' bg-cyan-600 w-[250px] flex border-2 p-2 rounded-lg' : 'w-[250px] flex border-2 p-2 rounded-lg'}>
            <p className="mr-5 text-gray-500">01</p>
            Internal Structure
            </NavLink>
<br />
            <NavLink to="/thirdsaturn" className={({isActive})=> isActive ? ' bg-cyan-600 w-[250px] flex border-2 p-2 rounded-lg' : 'w-[250px] flex border-2 p-2 rounded-lg'}>
            <p className="mr-5 text-gray-500">01</p>
            Surface Geology
            </NavLink>
</div>
                   </div>
        </div>
        <div className="flex flex-col space-y-4 md:flex-row items-center gap-10 md:gap-2 p-4 lg:flex-row md:justify-around lg:justify-around mt-10">
            <div className="text-center border-2 border-solid border-gray-700 rounded-lg p-3">
                <p className="text-white text-xl font-bold mb-2">ROTATION TIME</p>
                <h2 className="text-white text-4xl font-bold">10.8 hours</h2>
            </div>
            <div className="text-center border-2 border-solid border-gray-700 rounded-lg  p-3">
                <p className="text-white text-xl font-bold mb-2">REVOLUTION TIME</p>
                <h2 className="text-white text-4xl font-bold">29.46 years</h2>
            </div>
            <div className="text-center border-2 border-solid border-gray-700 rounded-lg  p-3">
                <p className="text-white text-xl font-bold mb-2">radius</p>
                <h2 className="text-white text-4xl font-bold">58,232 km</h2>
            </div>
            <div className="text-center border-2 border-solid border-gray-700 rounded-lg p-3">
                <p className="text-white text-xl font-bold mb-2">AVERAGE TEMP.</p>
                <h2 className="text-white text-4xl font-bold">-138°c</h2>
            </div>
         
        </div>
                </div>
    );
};

export default thirdsaturn;