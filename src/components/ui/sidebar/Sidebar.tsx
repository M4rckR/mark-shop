'use client'
import Link from "next/link"
import { IoCartOutline, IoCloseOutline, IoLogInOutline, IoPeopleOutline, IoPersonOutline, IoSearchOutline, IoTicketOutline } from "react-icons/io5"
import { useUIStore } from "@/store/ui/ui-store"
import { clsx } from "clsx"

export const Sidebar = () => {
  const isSidebarOpen = useUIStore(state => state.isSidebarOpen)
  const closeSideMenu = useUIStore(state => state.closeSideMenu)

  return (  
    <>
        {/* Background black*/}
        {
            isSidebarOpen && (
                <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30"/>
            )
        }

        {/* Blur */}
        {
            isSidebarOpen && (
                <div className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"/>
            )
        }

        {/* Sidebar */}
        <nav className={
            clsx(
                `
                fixed p-5 right-0 top-0 w-[500px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300`,
                {
                    "translate-x-full": !isSidebarOpen,
                }
            )
        }>
            <IoCloseOutline 
                size={50}
                className="absolute top-5 right-5 cursor-pointer"
                onClick={closeSideMenu}
            />
            {/* Input busqueda */}
            <div className="relative mt-14">
                <IoSearchOutline size={20} className="absolute top-2 left-2"/>
                <input
                    type="text"
                    placeholder="Buscar"
                    className="w-full bg-gray-50 rounded pl-10 py-1 pr-10 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-blue-500"
                />
            </div>

            {/* Menu */}

            <Link className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all" href="/category/men">
                <IoPersonOutline size={20}/>
                <span className="ml-3 text-xl">Perfil</span>
            </Link>
            <Link className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all" href="/category/men">
                <IoCartOutline size={20}/>
                <span className="ml-3 text-xl">Ordenes</span>
            </Link>
            <Link className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all" href="/category/men">
                <IoLogInOutline size={20}/>
                <span className="ml-3 text-xl">Ingresar</span>
            </Link>

            {/* Line separator */}
            <div className="w-full h-px bg-gray-200 my-10"/>

            <Link className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all" href="/category/men">
                <IoPersonOutline size={20}/>
                <span className="ml-3 text-xl">Productos</span>
            </Link>
            <Link className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all" href="/category/men">
                <IoTicketOutline size={20}/>
                <span className="ml-3 text-xl">Ordenes</span>
            </Link>
            <Link className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all" href="/category/men">
                <IoPeopleOutline size={20}/>
                <span className="ml-3 text-xl">Usuarios</span>
            </Link>
        </nav>


    </>
  )
}
