import { Link } from "react-router-dom"

export default function Register() {
  return (
    <>
        <h1 className="text-4xl font-black">Crear Cuenta</h1>
        <p className="font-medium">
            Crea tu cuenta llenando el siguiente formulario.
        </p>
        <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
            <form action="#">
                <div className="mb-4">
                    <label 
                    className="text-slate-600 font-bold"
                    htmlFor="name"
                    >Nombre</label>
                    <input 
                        type="text"
                        placeholder="John Doe"
                        className="bg-gray-100 border-2 w-full p-4 rounded-lg"
                        id="name"
                        name="name"
                        />
                </div>
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
                <div className="mb-4">
                    <label 
                    className="text-slate-600 font-bold"
                    htmlFor="password_confirmation"
                    >Confirmar Contraseña</label>
                    <input 
                        type="password"
                        placeholder="Repite tu contraseña"
                        className="bg-gray-100 border-2 w-full p-4 rounded-lg"
                        id="password_confirmation"
                        name="password_confirmation"
                        />
                </div>

                <input 
                    type="submit" 
                    value="Crear Cuenta"
                    className="bg-indigo-600 hover:bg-indigo-800 text-white font-bold
                     w-full p-3 mt-5 uppercase cursor-pointer"
                    />
            </form>
        </div>
        <nav className="mt-5 text-center">
            <Link 
                className="text-sm text-slate-600" 
                to="/auth/login">Ya tienes cuenta? Inicia Sesión!!
            </Link>
        </nav>
    </>
  )
}
