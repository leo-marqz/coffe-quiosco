import { Link } from "react-router-dom"

export default function login() {
  return (
    <>
      <h1 className="text-4xl font-black">Iniciar Sesión</h1>
        <p className="font-medium">
            Para crear un pedido debes iniciar sesión.
        </p>
        <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
            <form action="#">
               
                <div className="mb-4">
                    <label 
                    className="text-slate-600 font-bold"
                    htmlFor="email"
                    >Email</label>
                    <input 
                        type="text"
                        placeholder="John@gmail.com"
                        className="bg-gray-100 border-2 w-full p-4 rounded-lg"
                        id="email"
                        name="email"
                        />
                </div>
                <div className="mb-4">
                    <label 
                    className="text-slate-600 font-bold"
                    htmlFor="password"
                    >Contraseña</label>
                    <input 
                        type="password"
                        placeholder="$%jjxv-619xx"
                        className="bg-gray-100 border-2 w-full p-4 rounded-lg"
                        id="password"
                        name="password"
                        />
                </div>

                <input 
                    type="submit" 
                    value="Iniciar Sesión"
                    className="bg-indigo-600 hover:bg-indigo-800 text-white font-bold
                     w-full p-3 mt-5 uppercase cursor-pointer"
                    />
            </form>
        </div>
        <nav className="mt-5 text-center">
          <Link 
            to="/auth/register"
            className="text-sm text-slate-600"
            >Aun no tienes una cuenta? Crear una!!
          </Link>
        </nav>
    </>
  )
}
