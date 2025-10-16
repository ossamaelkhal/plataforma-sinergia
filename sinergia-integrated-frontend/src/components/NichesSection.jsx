
import React from 'react';

const NichesSection = () => {
  const niches = [
    { name: 'Saúde e Bem-Estar', description: 'Soluções personalizadas para o setor de saúde.' },
    { name: 'Tecnologia e Inovação', description: 'Impulsione startups e empresas de tecnologia.' },
    { name: 'Educação e E-learning', description: 'Ferramentas para plataformas de ensino online.' },
    { name: 'Finanças e Investimentos', description: 'Otimize estratégias para o mercado financeiro.' },
    { name: 'Imóveis e Construção', description: 'Conecte compradores e vendedores de imóveis.' },
    { name: 'Marketing Digital', description: 'Aprimore campanhas e estratégias de marketing.' },
    { name: 'E-commerce e Varejo', description: 'Maximize vendas e experiência do cliente online.' },
    { name: 'Serviços Profissionais', description: 'Expanda sua rede e clientela em serviços.' },
  ];

  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-gray-800">Explore Nossos Nichos de Mercado</h2>
        <p className="text-lg text-gray-600 mb-12">A SinergIA oferece soluções especializadas para diversos setores, adaptando-se às suas necessidades específicas.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {niches.map((niche, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-3 text-green-700">{niche.name}</h3>
              <p className="text-gray-600">{niche.description}</p>
              <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300">Saiba Mais</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NichesSection;

