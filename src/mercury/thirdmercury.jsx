import { NavLink } from "react-router-dom";
const thirdmercury = () => {
    return (
        <div className=" max-w-6xl mx-auto bg-[#070724]  pb-10">
        <div className="flex  flex-col gap-[200px] md:gap-1 lg:gap-1 md:flex-row lg:flex-row md:justify-around lg:justify-around max-w-6xl pt-5 lg:pt-20">
        <div className="w-[70%] md:w-[40%] lg:w-[30%] mx-auto  text-center">
        
        <div  className=" block md:hidden lg:hidden
        flex mb-8 border-t-2 gap-5  border-b-2  border-solid border-gray-500 p-2 
        text-white justify-around text-center">
        <NavLink to="/mercurytwo" className="w-[250px] flex rounded-lg ">
                      
                        OVERVIEW
                </NavLink>
        <br />
             <NavLink to="/scoundmercury" className="w-[250px] flex  rounded-lg ">
                    
                    Internal 
                    </NavLink>
        <br />
                    <NavLink to="/thirdmercury" className="w-[250px] flex rounded-lg ">
                    
                    Surface 
                    </NavLink>
        </div>
        <div className="text-center  relative ">
        <img className="w-full" src="/images/planet-mercury.svg" alt="" />
    <div className="w-[200px] left-20 top-[80%] text-center mx-auto absolute ">
        <img className="w-full " src="/images/geology-mercury.png" alt="" />
    </div>
    </div>
          
           
          </div>
                   <div className="w-[90%] md:w-[40%] mt-5 mb-5 lg:w-[30%] text-center mx-auto ">
                    <h1 className=" text-5xl lg:text-7xl text-white font-bold">Mercury</h1>
                    <p className="text-white mt-5">Mercury is the smallest planet in the Solar
                         System and the closest to the Sun. Its orbit
                          around the Sun takes 87.97 Earth days, the shortest
                           of all the Suns planets. Mercury is one of four 
                           terrestrial planets in the Solar System,
                         and is a rocky body like Earth.</p>
        <div className=" hidden md:block lg:block
        text-white w-[250px]  mt-5 text-center">
        <NavLink to="/mercurytwo" className={({isActive})=> isActive ? ' bg-cyan-600 w-[250px] flex border-2 p-2 rounded-lg' : 'w-[250px] flex border-2 p-2 rounded-lg'}>
                        <p className="mr-5 text-gray-500">01</p>
                        OVERVIEW
                </NavLink>
        <br />
                    <NavLink to="/scoundmercury" className={({isActive})=> isActive ? ' bg-cyan-600 w-[250px] flex border-2 p-2 rounded-lg' : 'w-[250px] flex border-2 p-2 rounded-lg'}>
                    <p className="mr-5 text-gray-500">01</p>
                    Internal Structure
                    </NavLink>
        <br />
                    <NavLink to="/thirdmercury" className={({isActive})=> isActive ? ' bg-cyan-600 w-[250px] flex border-2 p-2 rounded-lg' : 'w-[250px] flex border-2 p-2 rounded-lg'}>
                    <p className="mr-5 text-gray-500">01</p>
                    Surface Geology
                    </NavLink>
        </div>
                   </div>
        </div>
        <div className="flex flex-col space-y-4 md:flex-row items-center gap-10 md:gap-2 p-4 lg:flex-row md:justify-around lg:justify-around mt-10">
            <div className="text-center border-2 border-solid border-gray-700 w-full rounded-lg p-3 ">
                <p className="text-white text-xl  mb-2">ROTATION TIME</p>
                <h2 className="text-white text-4xl font-bold">58.6 days</h2>
            </div>
            <div className="text-center border-2 border-solid border-gray-700 w-full rounded-lg  p-3">
                <p className="text-white text-xl  mb-2">REVOLUTION TIME</p>
                <h2 className="text-white text-4xl font-bold">87.97 days</h2>
            </div>
            <div className="text-center border-2 border-solid border-gray-700 w-full rounded-lg  p-3">
                <p className="text-white text-xl  mb-2">radius</p>
                <h2 className="text-white text-4xl font-bold">2,439.7 km</h2>
            </div>
            <div className="text-center border-2 border-solid border-gray-700 w-full rounded-lg p-3">
                <p className="text-white text-xl font- mb-2">AVERAGE TEMP.</p>
                <h2 className="text-white text-4xl font-bold">430°c</h2>
            </div>
         
        </div>
                </div>
    );
};

export default thirdmercury;