import Slider from "../components/Slider";

const Home = () => {
    return (
        <div className="absolute px-5 lg:px-0 -z-50 min-h-[100vh] h-[100vh] w-full bg-[url('')]   top-0   object-contain" style={{backgroundImage:"url('https://images.unsplash.com/photo-1527362385507-e99d6bf2a2a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1084&q=80')", backgroundSize:"cover", backgroundRepeat:"no-repeat",backgroundPosition:'top'}}>
          <div className="relative top-24 flex flex-col md:flex-row justify-center items-center  h-[80vh]  md:max-w-[1150px] mx-auto">
       <div className="w-full md:w-[35%] bg-black bg-opacity-40 p-4 md:bg-transparent">
       <h1 className="text-white text-5xl w-fit md:text-4xl lg:text-5xl font-bold uppercase ">Travel With <span className="text-yellow-300 ">BookIT</span></h1>
       <p className="text-white mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores quo unde cupiditate voluptate aliquam molestias dolore maxime sed ad quasi!</p>
       <button className="bg-black text-yellow-300 font-bold px-12 py-3 rounded-md mt-4">Book Now</button>
       </div>
      <div className="w-full md:w-[65%] hidden md:block">
      <Slider/>
      </div>
          </div>
        </div>
    );
};

export default Home;