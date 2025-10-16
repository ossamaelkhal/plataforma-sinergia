import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Wrench, 
  Calculator, 
  BarChart3, 
  Workflow, 
  CheckCircle, 
  ArrowRight,
  Sparkles,
  Play,
  Download,
  Eye
} from 'lucide-react'

export default function InteractiveTools() {
  const [activeDemo, setActiveDemo] = useState(null)

  const tools = [
    {
      id: 'architect',
      title: 'Arquiteto de Soluções SinergIA',
      description: 'Descubra a solução perfeita para seu negócio através de um questionário inteligente, potencializando a sinergia operacional',
      icon: Wrench,
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Análise personalizada de necessidades',
        'Cálculo automático de ROI',
        'Roadmap de implementação'
      ],
      cta: 'Descobrir Minha Solução',
      demo: true
    },
    {
      id: 'roi-calculator',
      title: 'Calculadora de ROI SinergIA',
      description: 'Calcule o retorno sobre investimento específico para seu negócio, visualizando a sinergia dos resultados',
      icon: Calculator,
      color: 'from-green-500 to-emerald-500',
      features: [
        'Cálculo baseado em dados reais',
        'Projeção de economia de tempo',
        'Relatório PDF personalizado'
      ],
      cta: 'Calcular ROI',
      demo: true
    },
    {
      id: 'dashboard-demo',
      title: 'Dashboard Demo',
      description: 'Explore dashboards interativos com dados em tempo real',
      icon: BarChart3,
      color: 'from-purple-500 to-indigo-500',
      features: [
        'Métricas em tempo real',
        'Visualizações interativas',
        'Análise de performance'
      ],
      cta: 'Ver Dashboard',
      demo: true
    },
    {
      id: 'flow-simulator',
      title: 'Simulador de Fluxos',
      description: 'Monte fluxos de automação com drag & drop',
      icon: Workflow,
      color: 'from-orange-500 to-red-500',
      features: [
        'Interface drag & drop',
        'Simulação em tempo real',
        'Exportar para n8n'
      ],
      cta: 'Criar Fluxo',
      demo: true
    }
  ]

  const handleToolDemo = (toolId) => {
    setActiveDemo(toolId)
    // Aqui você pode implementar a lógica para abrir o demo específico
    console.log(`Abrindo demo da ferramenta: ${toolId}`)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/20">
            <Sparkles className="w-5 h-5 text-yellow-400" />
            <span className="text-white font-semibold">Ferramentas Interativas</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Experimente o poder da IA
          </h2>
          
          <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-8">
            Experimente o poder da IA antes mesmo de contratar. Nossas ferramentas interativas demonstram 
            como podemos transformar seu negócio.
          </p>

          {/* Free Badge */}
          <div className="inline-flex items-center gap-3 bg-green-500/20 backdrop-blur-sm rounded-2xl px-8 py-4 border border-green-500/30 mb-8">
            <CheckCircle className="w-6 h-6 text-green-400" />
            <div className="text-left">
              <div className="text-white font-semibold">Todas as ferramentas são 100% gratuitas</div>
              <div className="text-green-200 text-sm">Acesso imediato sem cadastro, sem cartão de crédito, sem compromisso</div>
            </div>
          </div>

          {/* Included Features */}
          <div className="text-white/70 text-sm">
            <strong className="text-white">Incluído:</strong> Arquiteto de Soluções IA • Calculadora de ROI • Simulador de Fluxos • Análises Personalizadas • Relatórios Detalhados
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {tools.map((tool, index) => {
            const Icon = tool.icon
            return (
              <Card 
                key={tool.id} 
                className="group bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-500 overflow-hidden"
              >
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tool.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <CardTitle className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                    {tool.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-white/80 leading-relaxed">
                    {tool.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3">
                    {tool.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-white/90 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button 
                      onClick={() => handleToolDemo(tool.id)}
                      className={`flex-1 bg-gradient-to-r ${tool.color} hover:shadow-lg hover:shadow-current/25 transition-all duration-300 group-hover:scale-105`}
                    >
                      <Play className="w-4 h-4 mr-2" />
                      {tool.cta}
                    </Button>
                    
                    {tool.demo && (
                      <Button 
                        variant="outline" 
                        size="icon"
                        className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
                        onClick={() => handleToolDemo(tool.id)}
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Demo Modal Placeholder */}
        {activeDemo && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Demo: {tools.find(t => t.id === activeDemo)?.title}
                </h3>
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={() => setActiveDemo(null)}
                >
                  ×
                </Button>
              </div>
              
              <div className="text-center py-12 text-gray-600">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="w-8 h-8 text-blue-600" />
                </div>
                <p>Demo interativo em desenvolvimento...</p>
                <p className="text-sm mt-2">Esta ferramenta será totalmente funcional na versão final.</p>
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Todas as ferramentas são gratuitas e não requerem cadastro
            </h3>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Começar Agora
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

