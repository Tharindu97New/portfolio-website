'use client';
import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { TbMenu2 } from "react-icons/tb";
import { MdOutlineClose } from "react-icons/md";

const NavBar = () => {

  const currentPath = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    {
      label: "Profile",
      href: "/",
    },
    {
      label: "Education",
      href: "/education",
    },
    {
      label: "Experience",
      href: "/experience",
    },
    {
      label: "Portfolio",
      href: "/portfolio",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];

  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link href="/"><div className='text-2xl font-bold'>Tharindu Kavishna</div></Link>
        <ul className={`md:flex md:items-center md:space-x-8  ${isOpen ? 'block' : 'hidden'}`}>
          {links.map(link => 
            <div key={link.href}>
                <Link 
                  className= {classNames({
                    'text-zinc-900': link.href === currentPath,
                    'text-zinc-500': link.href !== currentPath,
                    'hover:text-zinc-800 transition-color': true,
                  })}
                  href={link.href}
                >{link.label}</Link>
            </div> 
          )}
        </ul>

        <button onClick={toggleMenu} className="md:hidden block focus:outline-none">{!isOpen ? <TbMenu2 className='size-8' /> : <MdOutlineClose className='size-8' />} </button>
      </div>
    </nav>
  );
}

export default NavBar


