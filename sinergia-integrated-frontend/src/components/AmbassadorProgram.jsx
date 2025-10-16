
import React from 'react';

const AmbassadorProgram = () => {
  return (
    <section className="py-16 px-4 bg-gray-100 min-h-screen">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-gray-800">Programa de Embaixadores SinergIA</h2>
        <p className="text-lg text-gray-600 mb-12">Torne-se um embaixador da SinergIA e seja recompensado por expandir nossa rede. Junte-se a um grupo seleto de influenciadores e receba benefícios exclusivos.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card de Benefícios */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">Benefícios Exclusivos</h3>
            <ul className="list-disc list-inside text-gray-600 text-left mx-auto max-w-sm">
              <li>Comissões atrativas por cada indicação</li>
              <li>Acesso antecipado a novas funcionalidades</li>
              <li>Suporte prioritário e dedicado</li>
              <li>Participação em eventos exclusivos</li>
              <li>Reconhecimento na comunidade SinergIA</li>
            </ul>
          </div>

          {/* Card de Como Participar */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">Como Participar</h3>
            <p className="text-gray-600 text-left mx-auto max-w-sm mb-4">É simples! Preencha nosso formulário de inscrição e nossa equipe entrará em contato para mais detalhes.</p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">Inscreva-se Agora</button>
          </div>
        </div>

        {/* Seção de Depoimentos (Exemplo) */}
        <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">O que nossos Embaixadores Dizem</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="text-center max-w-xs">
              <p className="italic text-gray-700">"O programa de embaixadores da SinergIA me permitiu expandir minha rede e gerar uma renda extra significativa. Recomendo!"</p>
              <p className="font-semibold mt-2">Carlos Mendes</p>
            </div>
            <div className="text-center max-w-xs">
              <p className="italic text-gray-700">"É incrível fazer parte de algo tão inovador. O suporte é excelente e os benefícios são reais."</p>
              <p className="font-semibold mt-2">Fernanda Lima</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AmbassadorProgram;

