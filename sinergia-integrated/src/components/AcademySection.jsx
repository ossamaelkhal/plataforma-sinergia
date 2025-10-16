import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  GraduationCap, 
  Target, 
  Trophy, 
  Crown, 
  Star,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Users,
  DollarSign,
  Award,
  Zap
} from 'lucide-react'

export default function AcademySection() {
  const academyStats = {
    certified_sellers: 2847,
    generated_sales: 47000000, // R$ 47M
    avg_increase: 340,
    approval_rate: 94
  }

  const tracks = [
    {
      id: 'beginner',
      level: 'INICIANTE',
      title: 'Fundamentos de Vendas em IA',
      description: 'Base sólida para entender o mercado de IA e começar a vender com confiança',
      icon: Target,
      color: 'from-green-500 to-emerald-500',
      duration: '30h',
      modules: [
        'Psicologia do Cliente de IA (8h)',
        'Mapeamento de Dores e Oportunidades (6h)',
        'Apresentação de ROI Irresistível (4h)',
        'Simulações de Venda Reais (12h)'
      ],
      earnings: 'R$ 8.000 - R$ 15.000/mês',
      cta: 'Começar Trilha',
      popular: false
    },
    {
      id: 'advanced',
      level: 'AVANÇADO',
      title: 'Especialista em Soluções Complexas',
      description: 'Domine vendas consultivas de alto valor e torne-se referência no mercado',
      icon: Trophy,
      color: 'from-blue-500 to-cyan-500',
      duration: '40h',
      modules: [
        'Arquitetura de Soluções Personalizadas (10h)',
        'Negociação de Contratos Complexos (8h)',
        'Gestão de Pipeline B2B (6h)',
        'Mentorias 1:1 com Top Performers (16h)'
      ],
      earnings: 'R$ 25.000 - R$ 50.000/mês',
      cta: 'Começar Trilha',
      popular: true
    },
    {
      id: 'elite',
      level: 'ELITE',
      title: 'Líder de Vendas & Mentor',
      description: 'Forme sua própria equipe e construa um império de vendas em IA',
      icon: Crown,
      color: 'from-purple-500 to-indigo-500',
      duration: '40h',
      modules: [
        'Liderança de Equipes de Vendas (12h)',
        'Estratégias de Expansão Territorial (8h)',
        'Programa de Mentoria Avançada (20h)',
        'Participação nos Lucros da Empresa'
      ],
      earnings: 'R$ 80.000+ /mês',
      cta: 'Candidatar-se',
      popular: false
    }
  ]

  const methodology = {
    title: 'Metodologia A.U.R.A',
    steps: [
      {
        letter: 'A',
        title: 'Análise',
        description: 'Identificação profunda das necessidades do cliente'
      },
      {
        letter: 'U',
        title: 'Unificação',
        description: 'Alinhamento da solução com os objetivos do negócio'
      },
      {
        letter: 'R',
        title: 'Resultado',
        description: 'Apresentação clara do ROI e benefícios'
      },
      {
        letter: 'A',
        title: 'Ação',
        description: 'Fechamento eficaz e implementação'
      }
    ]
  }

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-yellow-500/30">
            <Target className="w-5 h-5 text-yellow-400" />
            <span className="text-yellow-300 font-semibold">A PRECURSORA DO MOVIMENTO</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            SinergIA Academy
          </h2>
          
          <h3 className="text-2xl md:text-3xl text-cyan-300 mb-6 font-light">
            Formando a Elite de Vendas em IA
          </h3>
          
          <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-8">
            <strong className="text-white">Não somos apenas uma academia de vendas.</strong> Somos o epicentro da revolução que está criando a maior força de vendas especializada em IA do Brasil. Aqui, você não aprende só a vender - você se torna um <strong className="text-cyan-300">Arquiteto de Transformação Digital</strong>.
          </p>

          {/* Academy Stats */}
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">{academyStats.certified_sellers.toLocaleString()}</div>
              <div className="text-white/70 text-sm">Vendedores Certificados</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-green-400 mb-2">R$ {(academyStats.generated_sales / 1000000).toFixed(0)}M</div>
              <div className="text-white/70 text-sm">Vendas Geradas pelos Alunos</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-yellow-400 mb-2">{academyStats.avg_increase}%</div>
              <div className="text-white/70 text-sm">Aumento Médio em Vendas</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-cyan-400 mb-2">{academyStats.approval_rate}%</div>
              <div className="text-white/70 text-sm">Taxa de Aprovação</div>
            </div>
          </div>
        </div>

        {/* Tracks Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Trilhas de Especialização em Vendas de IA
          </h3>

          <div className="grid lg:grid-cols-3 gap-8">
            {tracks.map((track, index) => {
              const Icon = track.icon
              return (
                <Card 
                  key={track.id} 
                  className={`group bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-500 overflow-hidden relative ${
                    track.popular ? 'ring-2 ring-yellow-400/50' : ''
                  }`}
                >
                  {track.popular && (
                    <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold">
                      MAIS POPULAR
                    </div>
                  )}

                  <CardHeader className="pb-4">
                    <Badge 
                      variant="secondary" 
                      className={`w-fit mb-3 bg-gradient-to-r ${track.color} text-white border-0`}
                    >
                      {track.level}
                    </Badge>
                    
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${track.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <CardTitle className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                      {track.title}
                    </CardTitle>
                    
                    <p className="text-white/80 leading-relaxed">
                      {track.description}
                    </p>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Duration */}
                    <div className="flex items-center gap-2 text-cyan-300">
                      <Award className="w-4 h-4" />
                      <span className="font-medium">{track.duration} de conteúdo</span>
                    </div>

                    {/* Modules */}
                    <div className="space-y-2">
                      {track.modules.map((module, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-white/90 text-sm">{module}</span>
                        </div>
                      ))}
                    </div>

                    {/* Earnings */}
                    <div className="bg-green-500/20 backdrop-blur-sm rounded-xl p-4 border border-green-500/30">
                      <div className="flex items-center gap-2 mb-2">
                        <DollarSign className="w-5 h-5 text-green-400" />
                        <span className="text-green-300 font-semibold text-sm">Potencial de Ganhos:</span>
                      </div>
                      <div className="text-white font-bold text-lg">
                        {track.earnings}
                      </div>
                    </div>

                    {/* CTA */}
                    <Button 
                      className={`w-full bg-gradient-to-r ${track.color} hover:shadow-lg hover:shadow-current/25 transition-all duration-300 group-hover:scale-105`}
                    >
                      {track.cta}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Methodology Section */}
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              {methodology.title}
            </h3>
            <p className="text-white/80 max-w-2xl mx-auto">
              Nossa metodologia exclusiva que transforma vendedores em arquitetos de soluções
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {methodology.steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">{step.letter}</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                <p className="text-white/70 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm rounded-3xl p-8 border border-yellow-500/30">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Pronto para se tornar um Arquiteto de Transformação Digital?
            </h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Junte-se à elite de vendedores que está revolucionando o mercado de IA no Brasil
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 transform hover:scale-105"
            >
              <GraduationCap className="w-5 h-5 mr-2" />
              Iniciar Minha Jornada na Academy
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

