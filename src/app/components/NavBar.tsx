"use client";

import { useState } from 'react';
import Link from 'next/link';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between font-extrabold bg items-center py-4 px-8 bg-blue-500 text-white">
      <div className="text-2xl font-bold">
        <Link href="/">
          <p className="text-3xl font-extrabold text-white bg-clip-text text-transparent">
          Turismo Walk
          </p>
        </Link>
      </div>
      <div className="hidden lg:flex space-x-7 hover:text-ne">
        <Link href="" className="hover:text-neutral-400">Home</Link>
        <Link href="" className="hover:text-neutral-400">Viagens</Link>
        <Link href="" className="hover:text-neutral-400">Guias</Link>
        <Link href="" className="hover:text-neutral-400">Blog</Link>
        <Link href="" className="hover:text-neutral-400">Ajuda</Link>
        <Link href="" className="hover:text-neutral-400">Destinos</Link>
      </div>
      <div className="hidden lg:flex space-x-7">
        <Link href="/pages/login">
          <button className="bg-blue-500 hover:text-neutral-400 py-2 px-4 rounded border border-[#005F8F]">Login</button>
        </Link>
      </div>
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="lg:hidden absolute top-16 left-0 right-0 bg-black text-white flex flex-col items-center space-y-4 py-4">
          <Link href="/pages/vantagens" onClick={toggleMenu}>Vantagens</Link>
          <Link href="/pages/integracoes" onClick={toggleMenu}>Integrações</Link>
          <Link href="/pages/planos" onClick={toggleMenu}>Planos</Link>
          <Link href="/pages/blog" onClick={toggleMenu}>Blog</Link>
          <Link href="/pages/ajuda" onClick={toggleMenu}>Ajuda</Link>
          <Link href="/pages/login" onClick={toggleMenu}>
            <button className="bg-gray-700 py-2 px-4 rounded">Login</button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
