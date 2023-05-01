import { Link } from "react-router-dom";

const Resgister = () => {

    const handleRegister= (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const checked = form.checkbox.checked;
        console.log(name,email , password , checked)
    }
   
    return (
        <div className="flex items-center justify-center h-[90vh]" >
            <div className="w-full max-w-2xl px-5">
                <form onSubmit={handleRegister} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" name="name" type="text" placeholder="John Doe" required />
                    </div>
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
                    <div className="flex gap-2 items-center mb-2">
                        <input type="checkbox" name="checkbox" id="" />
                        <p>Agreed to terms and condition</p>
                    </div>
                    <div>
                        <button className="w-full bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                         Register
                        </button>
                    </div>
                    <div className="mt-2">
                        <p>Already have an account? please <Link to="/login" className="underline">Log In</Link></p>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default Resgister;