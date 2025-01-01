import "./index.css";

function App() {
  return (
    <>
      {/* Header Section */}
      <div className="bg-white text-black p-4 sm:p-5 h-[80px] sm:h-[100px]">
        <nav className="flex justify-between items-center">
          {/* Logo Section */}
          <div>
            <img
              src="/Logo.jpg"
              className="w-16 h-12 sm:w-20 sm:h-14"
              alt="Logo"
            />
          </div>
          <ul className="flex items-center">
            <li className="text-green-500 hover:text-blue-700 text-xs sm:text-sm md:text-lg lg:text-xl mr-5 sm:mr-10">
              Sign In
            </li>
            <li>
              <button className="bg-slate-800 hover:bg-blue-600 text-white rounded py-1 px-3 text-xs sm:text-sm md:text-base lg:text-lg">
                Join Us
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Hero Section */}
      <div className="relative bg-[url('/public/bgphoto01.jpg')] bg-cover bg-center h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] backdrop-blur-sm">
        <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
          <h2 className="text-white text-sm sm:text-xl md:text-2xl lg:text-3xl font-bold text-center opacity-70 px-3 sm:px-4">
            Craving irresistible, mouthwatering meals delivered to your door.
            <br />
            Fresh, hot, and flavorful – satisfy your hunger in no time!
          </h2>
        </div>
      </div>

      {/* Location Selector */}
      <div className="flex justify-center mt-6 sm:mt-8">
        <div className="bg-gray-200 text-white w-full sm:w-[800px] h-20 sm:h-24 flex justify-between items-center flex-row rounded-full px-4 sm:px-7">
          <div className="flex items-center">
            <img src="/public/location.svg" alt="404" className="h-6 sm:h-8 w-6 sm:w-8" />
            <select className="text-yellow-900 w-[150px] sm:w-[250px] md:w-[350px] bg-gray-200 text-sm sm:text-xl md:text-3xl font-bold border-none focus:border-none focus:outline-none rounded-md">
              <option value="" disabled>
                Select City
              </option>
              <option value="option1">Junagadh</option>
              <option value="option1">Ahmedabad</option>
              <option value="option2">Rajkot</option>
              <option value="option3">Surat</option>
            </select>
          </div>
          <div>
            <button className="bg-green-600 rounded-full h-8 sm:h-10 md:h-12 w-24 sm:w-32 text-xs sm:text-base md:text-2xl hover:bg-orange-600">
              Order Now
            </button>
          </div>
        </div>
      </div>

      {/* Top Categories Section */}
      <div>
  <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl text-green-500 font-bold mt-8 sm:mt-14 ml-4 sm:ml-4 md:ml-10 lg:ml-16">
    Top Categories
  </h1>

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 ml-12 mt-10 justify-center">
    <div className="flex flex-col items-center">
      <img src="/p1.png" alt="Burger" className="w-24 sm:w-28 md:w-32 lg:w-36" />
      <h2 className="text-xs sm:text-sm md:text-xl lg:text-2xl text-center mt-3 sm:mt-4">Burger</h2>
    </div>

    <div className="flex flex-col items-center">
      <img src="/p2.webp" alt="Momos" className="w-24 sm:w-28 md:w-32 lg:w-36" />
      <h2 className="text-xs sm:text-sm md:text-xl lg:text-2xl text-center mt-3 sm:mt-4">Momos</h2>
    </div>

    <div className="flex flex-col items-center">
      <img src="/p3.webp" alt="Noodles" className="w-24 sm:w-28 md:w-32 lg:w-36" />
      <h2 className="text-xs sm:text-sm md:text-xl lg:text-2xl text-center mt-3 sm:mt-4">Noodles</h2>
    </div>

    <div className="flex flex-col items-center">
      <img src="/p4.webp" alt="Pizza" className="w-24 sm:w-28 md:w-32 lg:w-36" />
      <h2 className="text-xs sm:text-sm md:text-xl lg:text-2xl text-center mt-3 sm:mt-4">Pizza</h2>
    </div>

    <div className="flex flex-col items-center">
      <img src="/p5.webp" alt="Ice-Cream" className="w-24 sm:w-28 md:w-32 lg:w-36" />
      <h2 className="text-xs sm:text-sm md:text-xl lg:text-2xl text-center mt-3 sm:mt-4">Ice-Cream</h2>
    </div>

    <div className="flex flex-col items-center">
      <img src="/p6.webp" alt="Biryani" className="w-24 sm:w-28 md:w-32 lg:w-36" />
      <h2 className="text-xs sm:text-sm md:text-xl lg:text-2xl text-center mt-3 sm:mt-4">Biryani</h2>
    </div>

    <div className="flex flex-col items-center">
      <img src="/p7.webp" alt="Chicken" className="w-24 sm:w-28 md:w-32 lg:w-36" />
      <h2 className="text-xs sm:text-sm md:text-xl lg:text-2xl text-center mt-3 sm:mt-4">Chicken</h2>
    </div>

    <div className="flex flex-col items-center">
      <img src="/p8.webp" alt="Mutton" className="w-24 sm:w-28 md:w-32 lg:w-36" />
      <h2 className="text-xs sm:text-sm md:text-xl lg:text-2xl text-center mt-3 sm:mt-4">Mutton</h2>
    </div>

    <div className="flex flex-col items-center">
      <img src="/p9.webp" alt="Juice" className="w-24 sm:w-28 md:w-32 lg:w-36" />
      <h2 className="text-xs sm:text-sm md:text-xl lg:text-2xl text-center mt-3 sm:mt-4">Juice</h2>
    </div>

    <div className="flex flex-col items-center">
      <img src="/p10.webp" alt="Cake" className="w-24 sm:w-28 md:w-32 lg:w-36" />
      <h2 className="text-xs sm:text-sm md:text-xl lg:text-2xl text-center mt-3 sm:mt-4">Cake</h2>
    </div>
  </div>
</div>



      {/* Fast Delivery Section */}
      <div className="bg-green-600 p-8 sm:p-12 md:p-16 mt-28 sm:mt-40">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">
          <div className="text-sm sm:text-xl md:text-2xl w-[80%] sm:w-[75%] font-normal ml-4 sm:ml-6 md:ml-12">
            Fast and easy food delivery from local restaurants.
            <br />
            They provide real-time tracking and simple payment options.
          </div>
          <div>
            <img src="/bikephoto.svg" alt="404" className="w-64 sm:w-72 md:w-96" />
          </div>
        </div>
      </div>

      {/* Pre-Order Section */}
      <div className="grid grid-row-3 gap-6 sm:gap-8 justify-items-center mt-20 sm:mt-32">
        <div className="text-green-700 font-semibold text-3xl sm:text-5xl md:text-6xl">Pre-Order</div>
        <div>
          <img
            src="/pre order.svg"
            alt="404"
            className="w-[60%] sm:w-[50%] md:w-[40%] ml-6 sm:ml-16"
          />
        </div>
        <div className="bg-green-600 w-56 sm:w-64 h-12 sm:h-16 text-center text-white rounded-3xl font-bold text-lg sm:text-xl md:text-2xl pt-3 sm:pt-4">
          Click for Pre-Order
        </div>
      </div>

      {/* About Us Section */}
      <div className="bg-custom-light-green w-full h-auto mt-8 sm:mt-10">
        <div className="text-green-700 text-3xl sm:text-5xl md:text-7xl font-bold p-6 sm:p-10 md:p-20">About Us</div>
        <div className="flex flex-col sm:flex-row items-center">
          <div>
            <img src="/aboutpagebikephoto.svg" alt="" className="w-full sm:w-1/2 md:w-96 lg:w-1/4" />
          </div>
          <div className="sm:ml-4">
            <img src="/aboutarrow.svg" alt="" className="w-16 sm:w-20 md:w-28 lg:w-32" />
          </div>
          <div className="bg-green-600 w-full sm:w-[45%] md:w-[35%] lg:w-[30%] h-auto text-white rounded-2xl text-center font-bold text-sm sm:text-xl md:text-2xl lg:text-3xl mt-6 sm:mt-10 p-4 sm:p-6">
            FOODRIDE is an online food delivery platform to remove a bridge between restaurants and hungry people.
            FOODRIDE has started with the aim of providing a SEAMLESS FOOD DELIVERY experience to all foodies in India.
          </div>
        </div>
      </div>

      {/* About Background Image */}
      <div>
        <img src="/aboutbackground.png" alt="" className="w-full" />
      </div>
    </>
  );
}

export default App;
