import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Clock, Target, TrendingUp, Users, Sparkles, Play } from 'lucide-react'

export default function Hero() {
  const [metrics, setMetrics] = useState({
    hoursRescued: 621,
    leadsQualified: 3429,
    avgROI: 340,
    pmesLiberated: 1247
  })

  // Simular atualização das métricas em tempo real
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        hoursRescued: prev.hoursRescued + Math.floor(Math.random() * 3),
        leadsQualified: prev.leadsQualified + Math.floor(Math.random() * 5),
        avgROI: prev.avgROI + (Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random() * 2),
        pmesLiberated: prev.pmesLiberated + Math.floor(Math.random() * 2)
      }))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
            <Sparkles className="w-5 h-5 text-yellow-400" />
            <span className="text-white/90 text-sm font-medium">SinergIA: Inovação em IA para o Seu Negócio</span>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              SINERGIA
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl lg:text-4xl text-white/90 mb-6 font-light">
            Onde a Inovação Encontra a Eficiência
          </h2>

          <p className="text-xl text-white/80 max-w-4xl mx-auto mb-12 leading-relaxed">
            Sistemas Operacionais de IA que otimizam processos, transformando desafios em{' '}
            <span className="text-green-400 font-semibold">crescimento exponencial</span>
          </p>

          {/* Métrica Principal */}
          <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-6 mb-12 border border-white/20">
            <Clock className="w-8 h-8 text-cyan-400" />
            <div className="text-left">
              <div className="text-4xl font-bold text-white">{metrics.hoursRescued}h</div>
              <div className="text-white/70 text-sm">Horas Resgatadas Hoje</div>
            </div>
          </div>

          {/* CTAs Principais */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105"
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              Descobrir Sinergia
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm transition-all duration-300"
            >
              <Play className="w-5 h-5 mr-2" />
              Ver Demo Interativo
            </Button>
          </div>
        </div>

        {/* Métricas em Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <Clock className="w-8 h-8 text-cyan-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-3xl font-bold text-white mb-1">{metrics.hoursRescued}h</div>
              <div className="text-white/70 text-sm">Horas Resgatadas Hoje</div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <Target className="w-8 h-8 text-green-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-3xl font-bold text-white mb-1">{metrics.leadsQualified.toLocaleString()}</div>
              <div className="text-white/70 text-sm">Leads Qualificados</div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <TrendingUp className="w-8 h-8 text-yellow-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-3xl font-bold text-white mb-1">{metrics.avgROI}%</div>
              <div className="text-white/70 text-sm">ROI Médio dos Clientes</div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <Users className="w-8 h-8 text-purple-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-3xl font-bold text-white mb-1">{metrics.pmesLiberated.toLocaleString()}</div>
              <div className="text-white/70 text-sm">PMEs Libertadas</div>
            </CardContent>
          </Card>
        </div>

        {/* Proposta de Valor */}
        <div className="text-center mt-20">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
              A Sinergia da Eficiência: Sua Próxima Revolução Empresarial
            </h3>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              No cenário dinâmico do mercado, o tempo é o ativo mais valioso. Cada processo manual, cada tarefa repetitiva, 
              representa um custo oculto e uma oportunidade perdida. A SinergIA é a sua parceira estratégica, combinando 
              inteligência artificial de ponta com uma visão de negócios aguçada para automatizar o complexo, otimizar o 
              essencial e impulsionar seu crescimento de forma exponencial.
            </p>
            <div className="inline-block bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl px-8 py-6 border border-cyan-500/30">
              <p className="text-xl text-cyan-300 font-medium italic">
                "Não vendemos automação. Vendemos sinergia para o seu negócio prosperar."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}

// CSS personalizado para animações
const styles = `
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  33% { transform: translateY(-10px) rotate(120deg); }
  66% { transform: translateY(5px) rotate(240deg); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}
`

// Injetar estilos
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style')
  styleSheet.textContent = styles
  document.head.appendChild(styleSheet)
}

