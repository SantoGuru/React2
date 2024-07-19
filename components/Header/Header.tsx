// components/Header.tsx
import React from 'react';

const Header: React.FC = () => {
  return (
    <>
      <div className= " containter bg-neutral-800 text-white overflow-hidden p-1.5 text-sm">
        <div className="marquee space-x-8 px-4 gap-10">
          <div>Ethereum: 757.36 USD</div>
          <div>Bitcoin: 993.32 USD</div>
          <div>LUNA: 31.23 USD</div>
          <div>Tether: 216.92 USD</div>
          <div>Uniswap: 579.25 USD</div>
          <div>Dogecoin: 831.36 USD</div>
        </div>
      </div>
      <header className="flex justify-between items-center p-6 bg-black text-white">
        <div className="flex items-center space-x-4 gap-7 ml-5">
          <img src="../favicon.ico" alt="Logo" className='w-8 h-8'/>
          <div className="font-bold">Morry</div>
          <nav className="space-x-4">
            <a href="#" className="hover:underline text-sm">Home</a>
            <a href="#" className="hover:underline text-sm">Service</a>
            <a href="#" className="hover:underline text-sm">Market</a>
            <a href="#" className="hover:underline text-sm">Community</a>
            <a href="#" className="hover:underline text-sm">Blog</a>
            <a href="#" className="hover:underline text-sm">About</a>
          </nav>
        </div>
        <div className="flex space-x-4 items-center">
          <div className="flex items-center space-x-1">
            <select className="bg-black text-white border border-gray-600 rounded px-2 py-1">
              <option value="en">ENG</option>
              <option value="es">ESP</option>
              <option value="fr">FRA</option>
              <option value="de">DEU</option>
            </select>
          </div>
          <button className="px-4 py-2 bg-purple-600 rounded hover:bg-purple-700">Get Started</button>
        </div>
      </header>
    </>
  );
}

export default Header;
