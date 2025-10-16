
import React from 'react';

const DashboardSection = () => {
  return (
    <section className="py-16 px-4 bg-gray-100 min-h-screen">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-gray-800 text-center">Seu Dashboard de Performance</h2>
        <p className="text-lg text-gray-600 mb-12 text-center">Acompanhe suas métricas, gerencie suas campanhas e visualize seu progresso em tempo real.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card de Métricas Principais */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-indigo-700">Vendas Realizadas</h3>
            <p className="text-5xl font-bold text-indigo-600">1.250</p>
            <p className="text-gray-500 mt-2">+15% em relação ao mês anterior</p>
          </div>

          {/* Card de Leads Gerados */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-green-700">Leads Gerados</h3>
            <p className="text-5xl font-bold text-green-600">3.480</p>
            <p className="text-gray-500 mt-2">+20% em relação ao mês anterior</p>
          </div>

          {/* Card de Taxa de Conversão */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-red-700">Taxa de Conversão</h3>
            <p className="text-5xl font-bold text-red-600">3.5%</p>
            <p className="text-gray-500 mt-2">Estável em relação ao mês anterior</p>
          </div>
        </div>

        {/* Seção de Gráficos (Exemplo) */}
        <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Visão Geral Mensal</h3>
          {/* Aqui você integraria um componente de gráfico real, como Recharts ou Chart.js */}
          <div className="h-64 bg-gray-200 flex items-center justify-center text-gray-500 rounded-md">
            Gráfico de Vendas e Leads (Dados Reais Viriam da API)
          </div>
        </div>

        {/* Tabela de Campanhas Ativas (Exemplo) */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Campanhas Ativas</h3>
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b text-left">Nome da Campanha</th>
                <th className="py-2 px-4 border-b text-left">Status</th>
                <th className="py-2 px-4 border-b text-left">Leads</th>
                <th className="py-2 px-4 border-b text-left">Vendas</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b">Lançamento de Produto X</td>
                <td className="py-2 px-4 border-b text-green-600">Ativa</td>
                <td className="py-2 px-4 border-b">500</td>
                <td className="py-2 px-4 border-b">50</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">Parceria Estratégica Y</td>
                <td className="py-2 px-4 border-b text-green-600">Ativa</td>
                <td className="py-2 px-4 border-b">300</td>
                <td className="py-2 px-4 border-b">30</td>
              </tr>
              {/* Mais linhas de dados */}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
};

export default DashboardSection;

