import { Link } from "react-router-dom";

const Login = () => {


    const handleLogIn = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email , password)
    }
    
    return (
        <div className="flex items-center justify-center h-[90vh]">
        <div className="w-full max-w-xl mx-atuo px-5">
            <form onSubmit={handleLogIn} className="bg-white  shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" name="email" type="email" placeholder="johndoe@example.com" required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" name="password" type="password" placeholder="********" required />
                </div>
                <div>
                        <button className="w-full bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                       Log in
                        </button>
                    </div>
                    <div className="mt-2">
                        <p>Do not  have an account ? please <Link to="/register" className="underline">Register</Link></p>
                    </div>
            </form>
        </div>
    </div>
    );
};

export default Login;