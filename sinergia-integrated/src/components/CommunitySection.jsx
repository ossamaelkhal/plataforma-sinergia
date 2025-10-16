import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, MessageSquare, Zap, ArrowRight, Star } from "lucide-react"

export default function CommunitySection() {
  const communityFeatures = [
    {
      icon: MessageSquare,
      title: "Fóruns de Discussão Ativos",
      description: "Conecte-se com outros Arquitetos de Transformação Digital, compartilhe experiências e tire suas dúvidas.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Grupos de Estudo e Colaboração",
      description: "Participe de grupos focados em nichos específicos ou desafios de IA para aprendizado aprofundado.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Zap,
      title: "Eventos e Webinars Exclusivos",
      description: "Acesso prioritário a workshops, palestras com especialistas e sessões de Q&A ao vivo.",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Star,
      title: "Mentoria e Suporte",
      description: "Receba orientação de mentores experientes e suporte da equipe SinergIA para seus projetos.",
      color: "from-yellow-500 to-orange-500"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 rounded-full px-6 py-3 mb-6">
            <Users className="w-5 h-5" />
            <span className="font-semibold">Comunidade SinergIA</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Conecte-se, Colabore e Cresça
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Faça parte da nossa comunidade exclusiva de Arquitetos de Transformação Digital e acelere seu desenvolvimento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {communityFeatures.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:bg-white overflow-hidden hover:-translate-y-2">
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
          >
            <ArrowRight className="w-5 h-5 mr-2" />
            Junte-se à Comunidade Agora
          </Button>
        </div>
      </div>
    </section>
  )
}

