import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  TrendingUp, 
  Clock, 
  Target, 
  MessageSquare, 
  Settings, 
  ArrowRight,
  CheckCircle,
  BarChart3,
  Users,
  Zap
} from 'lucide-react'

export default function SystemsSection() {
  const systems = [
    {
      id: 'sales-marketing',
      title: 'Vendas & Marketing',
      subtitle: 'Sistema de Qualificação Inteligente',
      description: 'Identifica e qualifica leads automaticamente, priorizando oportunidades de alto valor',
      roi: '280%',
      timesSaved: '12h/semana',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-600',
      features: [
        'Scoring automático',
        'Segmentação inteligente',
        'Follow-up personalizado'
      ],
      stats: {
        leads: '2.847',
        conversion: '34.2%',
        revenue: 'R$ 1.2M'
      }
    },
    {
      id: 'customer-service',
      title: 'Atendimento',
      subtitle: 'Sistema de Atendimento Humanizado',
      description: 'Atendimento 24/7 com IA que entende contexto e emociona clientes',
      roi: '320%',
      timesSaved: '25h/semana',
      icon: MessageSquare,
      color: 'from-blue-500 to-cyan-600',
      features: [
        'Respostas contextuais',
        'Escalação inteligente',
        'Satisfação 95%+'
      ],
      stats: {
        tickets: '15.432',
        satisfaction: '96.8%',
        response: '< 30s'
      }
    },
    {
      id: 'operations',
      title: 'Operações',
      subtitle: 'Sistema de Gestão Operacional',
      description: 'Orquestra processos internos e elimina gargalos operacionais',
      roi: '450%',
      timesSaved: '30h/semana',
      icon: Settings,
      color: 'from-purple-500 to-indigo-600',
      features: [
        'Fluxos automatizados',
        'Alertas inteligentes',
        'Dashboards em tempo real'
      ],
      stats: {
        processes: '1.247',
        efficiency: '+89%',
        errors: '-94%'
      }
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 rounded-full px-6 py-3 mb-6">
            <Zap className="w-5 h-5" />
            <span className="font-semibold">Sistemas Operacionais de IA</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Não são apenas automações
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            São ecossistemas inteligentes que orquestram múltiplas funcionalidades, aprendem com seus dados 
            e evoluem constantemente para maximizar seus resultados.
          </p>
        </div>

        {/* Systems Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {systems.map((system, index) => {
            const Icon = system.icon
            return (
              <Card 
                key={system.id} 
                className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:bg-white overflow-hidden"
              >
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${system.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="space-y-2">
                    <Badge variant="secondary" className="text-xs font-medium">
                      {system.title}
                    </Badge>
                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {system.subtitle}
                    </CardTitle>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-gray-600 leading-relaxed">
                    {system.description}
                  </p>

                  {/* ROI e Tempo */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-green-50 rounded-xl">
                      <div className="text-2xl font-bold text-green-600 mb-1">
                        {system.roi}
                      </div>
                      <div className="text-xs text-green-700 font-medium">
                        ROI Médio
                      </div>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-xl">
                      <div className="text-2xl font-bold text-blue-600 mb-1">
                        {system.timesSaved}
                      </div>
                      <div className="text-xs text-blue-700 font-medium">
                        Tempo Economizado
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    {system.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-2 pt-4 border-t border-gray-100">
                    {Object.entries(system.stats).map(([key, value], idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-lg font-bold text-gray-900">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button 
                    onClick={() => document.getElementById("interactive-tools").scrollIntoView({ behavior: "smooth" })}
                    className={`w-full bg-gradient-to-r ${system.color} hover:shadow-lg hover:shadow-current/25 transition-all duration-300 group-hover:scale-105`}
                  >
                    Descobrir Sinergia
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl px-8 py-6 shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 group cursor-pointer">
            <div className="text-left">
              <div className="text-lg font-semibold mb-1">
                Pronto para revolucionar seu negócio?
              </div>
              <div className="text-blue-100 text-sm">
                Descubra qual sistema é perfeito para você
              </div>
            </div>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
          </div>
        </div>

        {/* Background Decorations */}
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl -z-10"></div>
      </div>
    </section>
  )
}

