
export default function Login() {
  return (
    <>
        <div className="login bg-blue-600 h-screen flex justify-center items-center">
            <div className="login__container border-2  bg-slate-300 p-10 rounded-lg">
                <h1 className="text-2xl py-3">Login</h1>
                <form>
                    <div className="mb-4">
                        <label
                        className="block text-slate-700 font-medium"
                        htmlFor="Email"
                        >
                        Email
                        </label>
                        <input type="email"
                        className="w-full px-3 py-2 border border-slate-300 rounded focus:ring-2 focus:ring-indigo-400 focus:outline-none" />
                    </div>
                    <div className="mb-4">
                        <label
                        className="block text-slate-700 font-medium"
                        htmlFor="Password"
                        >
                        Password
                        </label>
                        <input type="password" 
                            name="password"
                            className="w-full px-3 py-2 border border-slate-300 rounded focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                        />
                    </div>
                    
                    <button type="submit" className="login__signInButton p-2 bg-indigo-500 px-4 py-1 rounded-full text-white font-medium shadow hover:bg-indigo-600">Login</button>
                </form>

            </div>
        </div>
        
    </>
  )
}
