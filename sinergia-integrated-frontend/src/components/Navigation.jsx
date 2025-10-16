
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white hover:text-gray-300 transition duration-300">
          SinergIA
        </Link>
        <div className="space-x-4">
          <Link to="/dashboard" className="hover:text-gray-300 transition duration-300">Dashboard</Link>
          <Link to="/community" className="hover:text-gray-300 transition duration-300">Comunidade</Link>
          <Link to="/ambassador" className="hover:text-gray-300 transition duration-300">Embaixadores</Link>
          {/* Adicione outros links de navegação conforme necessário */}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

