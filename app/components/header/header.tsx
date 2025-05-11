'use client'
import { Dialog } from "@headlessui/react";
import { Bars3Icon, ChevronDownIcon, MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navigation } from "../../lib/data";
import { usePathname } from "next/navigation";
import styles from './header.module.css'

const active = {
    fontWeight: '500',
    color: 'rgb(255, 255, 255, 0.01)',
    position: 'relative',
    paddingLeft: '8px',
    paddingRight: '8px',
    borderBottom: '4px solid #32a1ce'
}

const disactive = {
    default: {
        fontWeight: '500',
        color: 'rgb(255, 255, 255, 0.01)',
        position: 'relative',
        paddingLeft: '8px',
        paddingRight: '8px',
        opacity: 0.50,
    },
    Hovered: {
        fontWeight: '500',
        color: 'rgb(255, 255, 255, 0.01)',
        position: 'relative',
        paddingLeft: '8px',
        paddingRight: '8px',
    }

}

const NavbarDesktop = () => {

    const pathName = usePathname()

    return (
        // Start Hero Section 
        <nav className="hidden lg:flex bg-greenBanner py-3 items-center flex-nowrap justify-start fixed top-0 left-0 w-full z-50" arial-label="Furni navigation bar">
            <div className="flex justify-between items-center x:max-w-[1320px] mx-auto w-full x:px-0 px-4">
                <Link href="/" className="text-white font-bold">
                    <div className="leading-tight">
                        <div className="text-[42px]">
                            D.E.P. <span className="text-2xl align-bottom">S.A.C.</span>
                        </div>
                        <div className="text-xs mt-[-2px] tracking-tight">
                            DISEÑOS DE EQUIPOS Y PROYECTOS
                        </div>
                    </div>
                </Link>

                <div className="flex">
                    <ul className="flex flex-row pl-0 list-none mt-0 ms-auto align-middle items-center">
                        <li className="ml-4 mr-4">
                            <Link className={`font-medium text-white relative pr-2 pl-2 ${pathName === '/' ? 'border-b-4 border-b-acento' : 'opacity-50'}`} href="/">Inicio</Link>
                        </li>
                        <li className="ml-4 mr-4">
                            <Link className={`font-medium text-white relative pr-2 pl-2  ${pathName === '/shop' ? 'border-b-4 border-b-acento' : 'opacity-50'}`} href="/shop">Productos</Link>
                        </li>
                        <li className="ml-4 mr-4">
                            <Link className={`font-medium text-white relative pr-2 pl-2 ${pathName === '/services' ? 'border-b-4 border-b-acento' : 'opacity-50'}`} href="/services">Servicios</Link>
                        </li>
                        <li className="ml-4 mr-4">
                            <Link className={`font-medium text-white relative pr-2 pl-2 ${pathName === '/nosotros' ? 'border-b-4 border-b-acento' : 'opacity-50'}`} href="/nosotros">Nosotros</Link>
                        </li>
                        <li className="ml-4 mr-4">
                            <Link className={`font-medium text-white relative pr-2 pl-2 ${pathName === '/blog' ? 'border-b-4 border-b-acento' : 'opacity-50'}`} href="/blog">Blog</Link>
                        </li>
                        <li className="ml-4 mr-4">
                            <Link className={`font-medium text-white relative pr-2 pl-2 ${pathName === '/contact' ? 'border-b-4 border-b-acento' : 'opacity-50'}`} href="/contact">Contactanos</Link>
                        </li>
                    </ul>

                    {/* <ul className="ml-10 flex ms-5">
                        <li className="ml-4 mr-4">
                            <a className="font-medium text-white relative" href="#">
                                <img src="assets/user.svg" className="" />
                            </a>
                        </li>
                        <li className="ml-4">
                            <a className="font-medium text-white relative" href="#">
                                <img src="assets/cart.svg" />
                            </a>
                        </li>
                    </ul> */}
                </div>
            </div>
        </nav>

    );
}

const NavbarMobile = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="lg:hidden bg-greenBanner py-2 fixed flex flex-wrap items-center justify-between w-full z-50" arial-label="Furni navigation bar">
            <div className="flex items-center justify-between w-full px-3 mx-auto">
                <Link className="text-3xl font-semibold text-white py-[0.3125rem] mr-4 whitespace-nowrap" href="/">
                    <div className="leading-tight">
                        <div className="text-[28px]">
                            D.E.P. <span className="text-2xl align-bottom">S.A.C.</span>
                        </div>
                        <div className="text-[9px] mt-[-2px] tracking-tight">
                            DISEÑOS DE EQUIPOS Y PROYECTOS
                        </div>
                    </div>
                </Link>

                <button className="text-white focus:outline-none py-1  leading-none bg-transparent rounded m-0 text-4xl" onClick={toggleMenu}>
                    <i className="bi bi-list"></i>
                </button>
            </div>

            {/* Lista del menú que se mostrará o ocultará */}
            <div className={`lg:hidden w-full mx-auto px-3 pt-2 ${menuOpen ? 'block' : 'hidden'}`}>
                <ul className="flex flex-col text-lg font-medium text-white">
                    <li className="my-3"><a className="opacity-50 w-full " href="/">Inicio</a></li>
                    <li className="my-3"><Link className="opacity-50" href="shop" onClick={toggleMenu}>Productos</Link></li>
                    <li className="my-3"><Link className="opacity-50" href="services" onClick={toggleMenu}>Servicios</Link></li>
                    <li className="my-3"><Link className="opacity-50" href="nosotros" onClick={toggleMenu}>Nosotros</Link></li>
                    <li className="my-3"><Link className="opacity-50" href="blog" onClick={toggleMenu}>Blog</Link></li>
                    <li className="my-3"><Link className="opacity-50" href="contact" onClick={toggleMenu}>Contáctanos</Link></li>
                </ul>

                {/* <ul className="flex flex-row text-lg font-medium text-white">
                    <li className="my-3 mr-5">
                        <a className=" relative" href="#">
                            <img src="assets/user.svg" className="" />
                        </a>
                    </li>
                    <li className="my-3">
                        <a className="relative" href="#">
                            <img src="assets/cart.svg" />
                        </a>
                    </li>
                </ul> */}
            </div>
        </nav>
    );
};

// function Header() {

//     return (
//         // Start Hero Section 
//         <nav className="bg-greenBanner pt-5 pb-5 flex items-center flex-nowrap justify-start navbar-dark bg-dark fixed top-0 left-0 w-full z-50" arial-label="Furni navigation bar">
//             <div className="flex justify-between items-center max-w-[1320px] mx-auto w-full">
//                 <a className="text-[32px] font-bold text-white" href="/">
//                     Depsac<span>.</span>
//                 </a>

//                 <div className="flex">
//                     <ul className="flex flex-row pl-0 list-none mt-0 ms-auto align-middle items-center">
//                         <li className="ml-4 mr-4"><a className="font-medium text-white relative pr-2 pl-2 border-b-4 border-b-secondary" href="/">Inicio</a></li>
//                         <li className="ml-4 mr-4"><Link className="font-medium text-white relative pr-2 pl-2 opacity-50" href="shop">Tienda</Link></li>
//                         <li className="ml-4 mr-4"><Link className="font-medium text-white relative pr-2 pl-2 opacity-50" href="nosotros">Nosotros</Link></li>
//                         <li className="ml-4 mr-4"><Link className="font-medium text-white relative pr-2 pl-2 opacity-50" href="services">Servicios</Link></li>
//                         <li className="ml-4 mr-4"><Link className="font-medium text-white relative pr-2 pl-2 opacity-50" href="blog">Blog</Link></li>
//                         <li className="ml-4 mr-4"><Link className="font-medium text-white relative pr-2 pl-2 opacity-50" href="contact">Contactanos</Link></li>
//                     </ul>

//                     <ul className="ml-10 flex ms-5">
//                         <li className="ml-4 mr-4">
//                             <a className="font-medium text-white relative" href="#">
//                                 <img src="assets/user.svg" className="" />
//                             </a>
//                         </li>
//                         <li className="ml-4">
//                             <a className="font-medium text-white relative" href="cart.html">
//                                 <img src="assets/cart.svg" />
//                             </a>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </nav>

//     );
// }

const Navbar = () => {
    return (
        <>
            {/* Navbar para pantallas grandes */}
            <NavbarDesktop />

            {/* Navbar para pantallas pequeñas */}
            <NavbarMobile />
        </>
    );
};

export default Navbar;