import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Stethoscope, 
  Calculator, 
  ShoppingCart, 
  Briefcase, 
  UtensilsCrossed, 
  GraduationCap, 
  Home, 
  Sparkles,
  ArrowRight,
  TrendingUp,
  CheckCircle
} from 'lucide-react'

export default function NichesSection() {
  const niches = [
    {
      id: 'clinics',
      title: 'Clínicas & Consultórios',
      description: 'Sistemas especializados para área da saúde',
      icon: Stethoscope,
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Agendamento inteligente',
        'Prontuário automatizado',
        'Follow-up de pacientes',
        'Telemedicina integrada'
      ],
      case_study: {
        name: 'Dr. Carlos',
        result: '+240% agendamentos'
      },
      stats: {
        clients: '847',
        satisfaction: '98.2%',
        time_saved: '15h/sem'
      }
    },
    {
      id: 'accounting',
      title: 'Escritórios Contábeis',
      description: 'Automação para serviços contábeis e fiscais',
      icon: Calculator,
      color: 'from-green-500 to-emerald-500',
      features: [
        'Coleta automática de documentos',
        'Relatórios inteligentes',
        'Comunicação com clientes',
        'Compliance automatizado'
      ],
      case_study: {
        name: 'Silva & Associados',
        result: '380% ROI'
      },
      stats: {
        clients: '1.234',
        accuracy: '99.7%',
        time_saved: '25h/sem'
      }
    },
    {
      id: 'ecommerce',
      title: 'E-commerce & Varejo',
      description: 'Sistemas para vendas online e físicas',
      icon: ShoppingCart,
      color: 'from-purple-500 to-indigo-500',
      features: [
        'Atendimento pós-venda',
        'Gestão de estoque',
        'Marketing automatizado',
        'Análise de comportamento'
      ],
      case_study: {
        name: 'TechStore',
        result: '+190% vendas'
      },
      stats: {
        clients: '2.156',
        conversion: '34.8%',
        time_saved: '20h/sem'
      }
    },
    {
      id: 'professional',
      title: 'Serviços Profissionais',
      description: 'Soluções para consultores e prestadores',
      icon: Briefcase,
      color: 'from-orange-500 to-red-500',
      features: [
        'Captação de leads',
        'Gestão de projetos',
        'Cobrança automatizada',
        'Relatórios de performance'
      ],
      case_study: {
        name: 'Consultoria ABC',
        result: '+150% clientes'
      },
      stats: {
        clients: '567',
        retention: '92.5%',
        time_saved: '18h/sem'
      }
    },
    {
      id: 'restaurants',
      title: 'Restaurantes & Food Service',
      description: 'Automação para o setor alimentício',
      icon: UtensilsCrossed,
      color: 'from-yellow-500 to-orange-500',
      features: [
        'Pedidos automatizados',
        'Gestão de delivery',
        'Controle de estoque',
        'Feedback de clientes'
      ],
      case_study: {
        name: 'Bistrô Gourmet',
        result: '+180% pedidos'
      },
      stats: {
        clients: '423',
        orders: '+180%',
        time_saved: '12h/sem'
      }
    },
    {
      id: 'education',
      title: 'Educação & Cursos',
      description: 'Sistemas para instituições de ensino',
      icon: GraduationCap,
      color: 'from-teal-500 to-cyan-500',
      features: [
        'Gestão de alunos',
        'Aulas automatizadas',
        'Avaliações inteligentes',
        'Comunicação com pais'
      ],
      case_study: {
        name: 'Escola Futuro',
        result: '+200% matrículas'
      },
      stats: {
        clients: '189',
        students: '12.5k',
        time_saved: '22h/sem'
      }
    },
    {
      id: 'real_estate',
      title: 'Imobiliárias',
      description: 'Soluções para o mercado imobiliário',
      icon: Home,
      color: 'from-indigo-500 to-purple-500',
      features: [
        'Captação de leads',
        'Tours virtuais',
        'Gestão de contratos',
        'Follow-up automatizado'
      ],
      case_study: {
        name: 'Imóveis Prime',
        result: '+220% vendas'
      },
      stats: {
        clients: '345',
        sales: '+220%',
        time_saved: '16h/sem'
      }
    },
    {
      id: 'beauty',
      title: 'Beleza & Estética',
      description: 'Automação para salões e clínicas estéticas',
      icon: Sparkles,
      color: 'from-pink-500 to-rose-500',
      features: [
        'Agendamento online',
        'Gestão de clientes',
        'Marketing personalizado',
        'Controle de produtos'
      ],
      case_study: {
        name: 'Estética Bella',
        result: '+160% fidelização'
      },
      stats: {
        clients: '678',
        retention: '89.3%',
        time_saved: '14h/sem'
      }
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 rounded-full px-6 py-3 mb-6">
            <Briefcase className="w-5 h-5" />
            <span className="font-semibold">Soluções Especializadas por Nicho</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Cada setor tem suas particularidades
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Nossos Sistemas de IA são especializados para resolver os problemas específicos do seu nicho de mercado.
          </p>
        </div>

        {/* Niches Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {niches.map((niche, index) => {
            const Icon = niche.icon
            return (
              <Card 
                key={niche.id} 
                className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:bg-white overflow-hidden hover:-translate-y-2"
              >
                <CardHeader className="pb-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${niche.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                    {niche.title}
                  </CardTitle>
                  
                  <p className="text-sm text-gray-600">
                    {niche.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Features */}
                  <div className="space-y-2">
                    {niche.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Case Study */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-3 border border-green-100">
                    <div className="flex items-center gap-2 mb-1">
                      <TrendingUp className="w-4 h-4 text-green-600" />
                      <span className="text-xs font-semibold text-green-700">Caso de Sucesso:</span>
                    </div>
                    <div className="text-sm font-bold text-gray-900">
                      {niche.case_study.name}: {niche.case_study.result}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-1 pt-2 border-t border-gray-100">
                    {Object.entries(niche.stats).map(([key, value], idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-sm font-bold text-gray-900">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">{key.replace('_', ' ')}</div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button 
                    onClick={() => document.getElementById("interactive-tools").scrollIntoView({ behavior: "smooth" })}
                    className={`w-full bg-gradient-to-r ${niche.color} hover:shadow-lg hover:shadow-current/25 transition-all duration-300 group-hover:scale-105 text-sm`}
                  >
                    Ver Soluções
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Bottom Stats */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Resultados Comprovados em Todos os Nichos
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div>
              <div className="text-3xl font-bold mb-2">8</div>
              <div className="text-blue-100">Nichos Especializados</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">6.439</div>
              <div className="text-blue-100">Clientes Ativos</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">+250%</div>
              <div className="text-blue-100">ROI Médio</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">18h</div>
              <div className="text-blue-100">Tempo Economizado/Semana</div>
            </div>
          </div>

          <Button 
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-white/25 transition-all duration-300 transform hover:scale-105"
          >
            <Sparkles className="w-5 h-5 mr-2" />
            Encontrar Minha Solução
          </Button>
        </div>
      </div>
    </section>
  )
}

