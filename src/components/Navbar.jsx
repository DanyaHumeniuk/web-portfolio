import { Menu, X } from "lucide-react"
import { useState } from "react"
import logo1 from "../assets/logo1.png"
import { navItems } from "../constants"

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen)
    }

    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center ">
                    <div className="flex items-center flex-shrink-0">
                        <img className="h-10 w-10 mr-2 scale-[3]" src={logo1} alt="logo" />
                        <span className="text-xl tracking-tight"></span>
                    </div>
                    <ul className="hidden lg:flex ml-auto space-x-12">
                        {navItems.map((item, index) => (
                            <li key={index} className="relative overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_rgba(107,114,128,0.9)] hover:rounded-md py-2 px-3">
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="hidden lg:flex justify-center ml-12 items-center">
                        <a href="#" className="bg-gradient-to-r from-orange-500 to-red-600 py-2 px-3 rounded-md relative overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_rgba(249,115,22,0.9)]">
                            Resume
                        </a>
                    </div>
                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={toggleNavbar}>
                            {mobileDrawerOpen ? <X /> : <Menu />}
                        </button>
                    </div>

                </div>
                {mobileDrawerOpen && (
                    <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                        <ul>
                            {navItems.map((item, index) => (
                                <li key={index} className=" flex hover:border-gray-500 hover:rounded-md py-2 px-3 justify-center items-center mt-4 relative overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_rgba(107,114,128,0.9)]">
                                    <a href={item.href}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                        <div className="flex space-x-6">
                            <a href="#" className="bg-gradient-to-r from-orange-500 to-red-600 py-2 px-3 rounded-md mt-6 relative overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_rgba(249,115,22,0.9)]">
                                Resume
                            </a>
                        </div>


                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar