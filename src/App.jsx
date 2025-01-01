import "./index.css";

function App() {
  return (
    <>
      <div className="bg-white text-black p-5 h-[100px] ">
        <nav className="flex justify-between items-center">
          {/* Logo Section */}
          <div>
            <img
              src="/Logo.jpg"
              className="w-30 h-20 "
              alt="Logo"
            />
          </div>
          <ul className="flex  items-center">
            <li className="text-green-500 hover:text-blue-700 text-lg mr-10">
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

      <div className="relative bg-[url('/public/bgphoto01.jpg')] bg-cover bg-center h-[500px] backdrop-blur-sm ">
        <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
          <h2 className="text-white text-4xl font-bold text-center opacity-70 ">
            Craving irresistible, mouthwatering meals delivered to your door.{" "}
            <br />
            Fresh, hot, and flavorful – satisfy your hunger in no time!
          </h2>
        </div>
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
            <img src="/p2.webp" alt="Burgure" />
            <h2 className="text-5xl"> Momos </h2>
          </div>

          <div>
            <img src="/p3.webp" alt="Burgure" />
            <h2 className="text-5xl"> Noodles </h2>
          </div>

          <div>
            <img src="/p4.webp" alt="Burgure" />
            <h2 className="text-5xl"> Pizza </h2>
          </div>

          <div>
            <img src="/p5.webp" alt="Burgure" />
            <h2 className="text-5xl"> Ice-Cream </h2>
          </div>

          <div>
            <img src="/p6.webp" alt="Burgure" />
            <h2 className="text-5xl "> Biryani </h2>
          </div>

          <div>
            <img src="/p7.webp" alt="Burgure" />
            <h2 className="text-5xl"> Chicken </h2>
          </div>

          <div>
            <img src="/p8.webp" alt="Burgure" />
            <h2 className="text-5xl"> Mutton </h2>
          </div>

          <div>
            <img src="/p9.webp" alt="Burgure" />
            <h2 className="text-5xl"> Juice </h2>
          </div>

          <div>
            <img src="/p10.webp" alt="Burgure" />
            <h2 className="text-5xl"> Cake </h2>
          </div>
        </div>
      </div>
      <div className="bg-green-600 p-20 mt-44"> </div>

      <div className="grid grid-cols-2 items-center  mt-7">
        <div className="text-9xl font-normal">
          The Fastest Delivery In Your City
        </div>
        <div>
          <img src="/bikephoto.svg" alt="404" />
        </div>
      </div> 

      <div className="grid grid-row-3 gap-9  justify-items-center  ">
        <div className="text-green-700 font-semibold text-8xl  mt-40">
          Pre-Order
        </div>
        <div className="  ">
          <img src="/pre order.svg" alt="" />
        </div>

        <div className="bg-green-600 w-60  h-9 text-center text-white rounded-3xl font-bold text-2xl ">
          Click for Pre-Order
        </div>
      </div>

      <div>
        <div className="bg-custom-light-green w-[100%] h-[90%] mt-10 ">
          <div className="text-green-700 text-7xl font-bold p-32 ">
            About Us
          </div>

          <div className="flex ">
            <div>
              <img src="/aboutpagebikephoto.svg" alt="" />
            </div>

            <div>
              <img src="/aboutarrow.svg" alt="" />
            </div>

            <div className="bg-green-600 w-[40%]   h-[50%] text-white rounded-2xl text-center font-bold  text-2xl mt-20">
              {" "}
              FOODRIDE is an online food delivery platform to remove a bridge
              between restaurants and hungry people. FOODRIDE has started with
              the aim of providing a SEAMLESS FOOD DELIVERY experience to all
              the foodies OVER INDIA. Earlier FOODRIDE was only limited to rural
              areas but now after getting a great response, FOODRIDE is proudly
              expanding its wings, soon riding towards other parts of the
              country. We are a team of 100+ passionate employees with 200+
              delivery partners and 100+ restaurant partners cooking 100+
              international cuisines of food delivered daily to our customers at
              affordable prices and huge discounts. The Simple way of using
              FOODRIDE. DOWNLOAD - TAP - ENJOY
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src="/aboutbackground.png" alt="" className="w-[100%]" />
      </div>
    </>
  );
}

export default App;
