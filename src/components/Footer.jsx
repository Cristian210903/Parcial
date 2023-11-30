import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>


            <footer className="bg-blue-200 rounded-lg shadow m-4 dark:bg-gray-800">
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">RECIPESCG</a>. All Rights Reserved.
                    </span>
                    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                        <li>
                            <Link to="/" className="hover:underline me-4 md:me-6">Principal</Link>
                        </li>
                        <li>
                            <Link to="/nosotros" className="hover:underline me-4 md:me-6">Nosotros</Link>
                        </li>
                        <li>
                            <Link to="/recipes" className="hover:underline me-4 md:me-6">Recetas</Link>
                        </li>
                        <li>
                            <Link to="/chefs" className="hover:underline">Chefs</Link>
                        </li>
                    </ul>
                </div>
            </footer>

        </>
    )
}
export default Footer;