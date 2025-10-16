
import React from 'react';

const AcademySection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-gray-800">Academia SinergIA: Aprenda e Cresça</h2>
        <p className="text-lg text-gray-600 mb-12">Acesse cursos, tutoriais e recursos exclusivos para dominar as estratégias de vendas e aquisição de parceiros.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-orange-700">Cursos de Vendas</h3>
            <p className="text-gray-600">Do básico ao avançado, aprenda as melhores técnicas de vendas com especialistas.</p>
            <button className="mt-4 bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition duration-300">Ver Cursos</button>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-orange-700">Webinars Exclusivos</h3>
            <p className="text-gray-600">Participe de sessões ao vivo com líderes do setor e aprofunde seus conhecimentos.</p>
            <button className="mt-4 bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition duration-300">Inscrever-se</button>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-orange-700">Biblioteca de Recursos</h3>
            <p className="text-gray-600">Acesse e-books, templates e guias práticos para impulsionar seus resultados.</p>
            <button className="mt-4 bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition duration-300">Explorar</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademySection;

