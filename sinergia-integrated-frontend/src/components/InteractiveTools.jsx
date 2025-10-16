
import React from 'react';

const InteractiveTools = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-gray-800">Ferramentas Interativas</h2>
        <p className="text-lg text-gray-600 mb-12">Explore nossas ferramentas interativas projetadas para simplificar suas operações e maximizar seus resultados.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">Construtor de Campanhas</h3>
            <p className="text-gray-600">Crie e gerencie campanhas de marketing e vendas de forma intuitiva.</p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">Acessar</button>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">Simulador de ROI</h3>
            <p className="text-gray-600">Calcule o retorno sobre investimento de suas estratégias com precisão.</p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">Acessar</button>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">Gerador de Conteúdo IA</h3>
            <p className="text-gray-600">Produza textos e ideias para suas campanhas em segundos com nossa IA.</p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">Acessar</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveTools;

