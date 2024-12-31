import { useEffect } from "react";
import "./index.css"; // Import Tailwind CSS
// import { FaLocationDot } from 'react-icons/fa6';
// import { MdOutlineArrowDropDown } from 'react-icons/md';

function App() {
  useEffect(() => {
    // Add Tailwind classes for margin and padding to body
    document.body.classList.add("m-0", "p-0");
  }, []);

  return (
    <>
      <div className="bg-white text-black p-5 h-[100px] m-0">
        <nav className="flex justify-between items-center">
          {/* Logo Section */}
          <div>
            <img
              src="/public/Logo.jpg"
              className="w-25 h-20 m-0 p-0 object-cover"
              alt="Logo"
            />
          </div>
          <ul className="flex space-x-6 items-center">
            <li className="text-green-500 hover:text-blue-700 text-lg">
              Sign In
            </li>
            <li>
              <button className="bg-slate-800 hover:bg-blue-600 text-white rounded py-2 px-4">
                Join Us
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Background section with centered text */}
      <div className="bg-[url('/public/bgphoto01.jpg')] bg-cover bg-center h-screen flex items-center justify-center m-0">
        <h1 className="text-white text-4xl font-bold text-center my-8 px-4">
          Granted, money can not buy happiness, <br />
          But tasty food can be bought from it.
        </h1>
      </div>
      <div className="flex justify-center mt-8">
        <div className="bg-gray-200 text-white w-[900px] h-24 flex justify-between items-center  flex-row rounded-full px-7 ">
          {/* <FaLocationDot className="w-12 h-12 mt-5  " />  */}
          <div className="flex items-center">
            <img src="/public/location.svg" alt="404" className="h-10 w-10" />

            <select className="text-yellow-900 w-[450px] bg-gray-200 text-3xl font-bold border-none focus:border-none focus:outline-none rounded-md ">
              <option value="" disabled>
                {" "}
                Select City
              </option>
              <option value="option1">Junagadh</option>
              <option value="option1">Ahmedabad</option>
              <option value="option2">Rajkot</option>
              <option value="option3">Surat</option>
            </select>
          </div>
          <div>
            <button className="bg-green-600 rounded-full h-16 w-44 text-2xl hover:bg-orange-600">
              {" "}
              Order Now{" "}
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="mt-14 ml-28">
          <div>
            <h1 className="text-9xl text-green-500  font-bold">
              Top Categories
            </h1>
          </div>
        </div>
        <div className="grid  grid-cols-5  gap-10   ml-12   mt-10">
          <div>
            <img src="/p1.png" alt="Burgure" />
            <h2 className="text-5xl"> Burger </h2>
          </div>

          <div>
            <img src="/public/p2.webp" alt="Burgure" />
            <h2 className="text-5xl"> Momos </h2>
          </div>

          <div>
            <img src="/public/p3.webp" alt="Burgure" />
            <h2 className="text-5xl"> Noodles </h2>
          </div>

          <div>
            <img src="/public/p4.webp" alt="Burgure" />
            <h2 className="text-5xl"> Pizza </h2>
          </div>

          <div>
            <img src="/public/p5.webp" alt="Burgure" />
            <h2 className="text-5xl"> Ice-Cream </h2>
          </div>

          <div>
            <img src="/public/p6.webp" alt="Burgure" />
            <h2 className="text-5xl "> Biryani </h2>
          </div>

          <div>
            <img src="/public/p7.webp" alt="Burgure" />
            <h2 className="text-5xl"> Chicken </h2>
          </div>

          <div>
            <img src="/public/p8.webp" alt="Burgure" />
            <h2 className="text-5xl"> Mutton </h2>
          </div>

          <div>
            <img src="/public/p9.webp" alt="Burgure" />
            <h2 className="text-5xl"> Juice </h2>
          </div>

          <div>
            <img src="/public/p10.webp" alt="Burgure" />
            <h2 className="text-5xl"> Cake </h2>
          </div>
        </div>
      </div>
      <div className="bg-green-600 p-20 mt-44"> </div>

      <div className="grid grid-cols-2 items-center  mt-7">
        <div className="text-9xl font-normal">
          
          The Fastest 
          Delivery 
          In Your City
        </div>
        <div>
          <img src="/public/bikephoto.svg" alt="" />
        </div>
      </div>
      
    </>
  );
}

export default App;
