import { useState } from 'react'
import LogoLandwind from './../../assets/images/logo.svg'


export default function Header() {
    const [open, setOpen] = useState(false)

    return (
        <header className="fixed w-full">
            <nav className="bg-white border-gray-200 py-2.5">
                <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
                    <Landwind />
                    <Download setOpen={setOpen} open={open} />
                    <Menu />
                    <MenuMobile open={open} />
                </div>
            </nav>
        </header>
    )
}




function Landwind() {
    return (
        <a href="#" className="flex items-center">
            <img src={LogoLandwind} className="h-6 mr-3 sm:h-9" alt="Landwind Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-black">Landwind</span>
        </a>
    )
}


function Download({ setOpen, open }) {

    return (
        <div className="flex items-center lg:order-2">
            <div className="hidden mt-2 mr-4 sm:inline-block">
                <a className="github-button" href="https://github.com/AliNikseresht?tab=repositories">Star</a>
            </div>
            <a href="https://github.com/AliNikseresht?tab=repositories"
                className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">Download</a>
            <button
                onClick={() => setOpen(!open)}
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clip-rule="evenodd"></path>
                </svg>
                <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path>
                </svg>
            </button>
        </div>
    )
}


function Menu() {
    return (
        <div className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                    <a href="#"
                        className="block py-2 pl-3 pr-4 text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-white"
                    >Home</a>
                </li>
                <li>
                    <a href="#"
                        className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-black lg:dark:hover:text-purple-700 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 transition-all">Company</a>
                </li>
                <li>
                    <a href="#"
                        className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-black lg:dark:hover:text-purple-700 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 transition-all">Marketplace</a>
                </li>
                <li>
                    <a href="#"
                        className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-black lg:dark:hover:text-purple-700 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 transition-all">Features</a>
                </li>
                <li>
                    <a href="#"
                        className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-black lg:dark:hover:text-purple-700 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 transition-all">Team</a>
                </li>
                <li>
                    <a href="#"
                        className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-black lg:dark:hover:text-purple-700 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 transition-all">Contact</a>
                </li>
            </ul>
        </div>
    )
}


function MenuMobile({ open }) {
    return (
        <div className={`items-center justify-between w-full ${open ? 'flex' : 'hidden'} lg:w-auto lg:order-1`}>
            <ul className="flex w-full flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                    <a href="#"
                        className="block py-2 pl-3 pr-4 text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-white"
                    >Home</a>
                </li>
                <li>
                    <a href="#"
                        className="block py-2 pl-3 pr-4 text-gray-700 border-b hover:bg-transparent lg:border-0 lg:p-0 dark:text-black dark:border-gray-100 transition-all">Company</a>
                </li>
                <li>
                    <a href="#"
                        className="block py-2 pl-3 pr-4 text-gray-700 border-b hover:bg-transparent lg:border-0 lg:p-0 dark:text-black dark:border-gray-100 transition-all">Marketplace</a>
                </li>
                <li>
                    <a href="#"
                        className="block py-2 pl-3 pr-4 text-gray-700 border-b hover:bg-transparent lg:border-0 lg:p-0 dark:text-black dark:border-gray-100 transition-all">Features</a>
                </li>
                <li>
                    <a href="#"
                        className="block py-2 pl-3 pr-4 text-gray-700 border-b hover:bg-transparent lg:border-0 lg:p-0 dark:text-black dark:border-gray-100 transition-all">Team</a>
                </li>
                <li>
                    <a href="#"
                        className="block py-2 pl-3 pr-4 text-gray-700 border-b hover:bg-transparent lg:border-0 lg:p-0 dark:text-black dark:border-gray-100 transition-all">Contact</a>
                </li>
            </ul>
        </div>
    )
}