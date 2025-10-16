
import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-purple-600 to-blue-500 text-white py-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4 animate-fade-in">SinergIA: A Plataforma Definitiva para Vendas e Aquisição de Parceiros</h1>
        <p className="text-xl mb-8 animate-slide-up">Potencialize seus resultados com inteligência artificial e ferramentas inovadoras.</p>
        <button className="bg-white text-purple-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-300">Comece Agora</button>
      </div>
    </section>
  );
};

export default Hero;

