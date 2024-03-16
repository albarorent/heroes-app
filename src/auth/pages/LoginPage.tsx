import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context";
import { useForm } from "../../hooks/UseForm";

export const LoginPage = () => {
  const { login } = useAuthContext();
  const navigate = useNavigate();

  const { formState, onInputChange } = useForm({ nombre: "" });
  const { nombre } = formState;

  const onLogin = (e: any): void => {
    e.preventDefault();

    login(nombre);
    navigate("/");
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 h-lvh">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <span className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img
            className="w-8 h-8 mr-2"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />
          Heroes App
        </span>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Inicia sesion con tu nombre
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={onLogin}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  name="nombre"
                  id="nombre"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Ingresa tu nombre"
                  required
                  onChange={onInputChange}
                  value={nombre}
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-cyan-950 border-cyan-900 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
