
import React from 'react';

const CommunitySection = () => {
  return (
    <section className="py-16 px-4 bg-white min-h-screen">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-gray-800">Comunidade SinergIA: Conecte-se e Colabore</h2>
        <p className="text-lg text-gray-600 mb-12">Junte-se à nossa crescente comunidade de empreendedores, especialistas e parceiros. Compartilhe conhecimentos, faça networking e cresça juntos.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card de Fóruns de Discussão */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-purple-700">Fóruns de Discussão</h3>
            <p className="text-gray-600">Participe de discussões, tire dúvidas e compartilhe suas experiências com outros membros.</p>
            <button className="mt-4 bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 transition duration-300">Acessar Fóruns</button>
          </div>

          {/* Card de Eventos e Webinars */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-purple-700">Eventos e Webinars</h3>
            <p className="text-gray-600">Fique por dentro dos próximos eventos, workshops e webinars exclusivos para membros.</p>
            <button className="mt-4 bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 transition duration-300">Ver Eventos</button>
          </div>
        </div>

        {/* Seção de Destaques da Comunidade (Exemplo) */}
        <div className="mt-12 bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Membros em Destaque</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="text-center">
              <img src="https://via.placeholder.com/80" alt="Membro 1" className="rounded-full mx-auto mb-2" />
              <p className="font-semibold">Maria Silva</p>
              <p className="text-sm text-gray-500">Especialista em Marketing</p>
            </div>
            <div className="text-center">
              <img src="https://via.placeholder.com/80" alt="Membro 2" className="rounded-full mx-auto mb-2" />
              <p className="font-semibold">João Santos</p>
              <p className="text-sm text-gray-500">Consultor de Vendas</p>
            </div>
            <div className="text-center">
              <img src="https://via.placeholder.com/80" alt="Membro 3" className="rounded-full mx-auto mb-2" />
              <p className="font-semibold">Ana Costa</p>
              <p className="text-sm text-gray-500">Desenvolvedora Web</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CommunitySection;

