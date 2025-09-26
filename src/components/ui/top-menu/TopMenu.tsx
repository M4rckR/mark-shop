'use client'
import { titleFont } from "@/config/fonts"
import Link from "next/link"
import { IoCartOutline, IoSearchOutline } from "react-icons/io5"
import { useUIStore } from "@/store/ui/ui-store"

export const TopMenu = () => {
  const openSideMenu = useUIStore(state => state.openSideMenu)
  return (
    <nav className="flex justify-between items-center w-full container mx-auto max-w-7xl px-4"> 
        {/* Logo */}
        <div>
            <Link href={"/"}>
                <span className={`${titleFont.className}`}>Teslo</span>
                <span> | Shop</span>
            </Link>
        </div>

        {/* Center menu */}
        <div className="hidden sm:block">
          <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" href="/category/men">Hombres</Link>
          <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" href="/category/women">Mujeres</Link>
          <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" href="/category/kid">Niños</Link>
        </div>

        {/* Search, cart menu */}
        <div className="flex items-center">
          <Link href="/search">
            <IoSearchOutline className="w-5 h-5"/>
          </Link>
          <Link href="/cart">
            <div className="relative mx-2">
              <span className="text-xs rounded-full text-white px-1 font-bold absolute -top-2 -right-2 bg-blue-700">3</span>
              <IoCartOutline className="w-5 h-5"/>
            </div>
          </Link>

          <button className="m-2 p-2 rounded-md transition-all hover:bg-gray-100 cursor-pointer" onClick={openSideMenu}>
            Menú
          </button>
        </div>
    </nav>
  )
}
