import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, DollarSign, Award, ArrowRight, TrendingUp, CheckCircle } from "lucide-react"

export default function AmbassadorProgram() {
  const benefits = [
    {
      icon: DollarSign,
      title: "Comissões Generosas",
      description: "Ganhe comissões atrativas por cada novo cliente ou aluno que você indicar para a SinergIA.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Award,
      title: "Acesso Exclusivo",
      description: "Tenha acesso antecipado a novas funcionalidades, treinamentos avançados e eventos VIP.",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: TrendingUp,
      title: "Crescimento Profissional",
      description: "Desenvolva suas habilidades de vendas e networking, tornando-se uma referência no mercado de IA.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: CheckCircle,
      title: "Suporte Dedicado",
      description: "Conte com uma equipe de suporte exclusiva para embaixadores, pronta para te ajudar no que precisar.",
      color: "from-yellow-500 to-orange-500"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 rounded-full px-6 py-3 mb-6">
            <Users className="w-5 h-5" />
            <span className="font-semibold">Programa de Embaixadores</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Torne-se um Embaixador SinergIA
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Amplie seu impacto, aumente seus ganhos e seja parte da nossa rede de elite.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:bg-white overflow-hidden hover:-translate-y-2">
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105"
          >
            <ArrowRight className="w-5 h-5 mr-2" />
            Inscreva-se no Programa de Embaixadores
          </Button>
        </div>
      </div>
    </section>
  )
}

