import { Link, useLocation } from "react-router-dom";


const Navbar = () => {
    const location = useLocation();
    console.log(location.pathname)
    return (
      <div className={`${location.pathname == "/" ? "text-white" : "text-black bg-gray-100 shadow-lg"} `}>
          <nav className="flex flex-col md:flex-row md:items-center md:justify-between md:max-w-[1150px] mx-auto py-3 px-5 lg:px-0">
            {/* LOGO */}
            <div>
                <h1 className={`${location.pathname == "/" && "text-yellow-400"}font-serif text-4xl font-bold bg-black bg-opacity-40 lg:bg-transparent p-2 `}>BookIT</h1>
            </div>

            {/* LINKS */}
            <ul className="hidden md:flex flex-col md:flex-row mt-5 md:mt-0 gap-5 font-bold">
                <Link to="/"><li>Home</li></Link>
                <Link to="/destination"><li>Destination</li></Link>
                <Link to="/register"><li>Register</li></Link>
                <Link to="/login"><li>Login</li></Link>
            </ul>
        </nav>
      </div>
    );
};

export default Navbar;

