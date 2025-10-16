
import React from 'react';

const SystemsSection = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-gray-800">Sistemas de IA Avançados</h2>
        <p className="text-lg text-gray-600 mb-12">Nossos sistemas de inteligência artificial são projetados para otimizar cada etapa do seu processo de vendas e aquisição de parceiros.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-purple-700">Automação de Vendas</h3>
            <p className="text-gray-600">Automatize tarefas repetitivas, gerencie leads e feche mais negócios com nossa IA.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-purple-700">Análise Preditiva</h3>
            <p className="text-gray-600">Preveja tendências de mercado e identifique oportunidades com análises baseadas em IA.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-purple-700">Personalização de Conteúdo</h3>
            <p className="text-gray-600">Crie conteúdo altamente personalizado para seus clientes e parceiros.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemsSection;

