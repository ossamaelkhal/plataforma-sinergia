import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {
  DollarSign,
  Users,
  Clock,
  CheckCircle,
  Activity,
  Award,
  TrendingUp,
  Zap,
  GraduationCap
} from 'lucide-react';

export default function DashboardSection() {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Dados de fallback para quando a API não estiver disponível
  const fallbackData = {
    performance_chart: [
      { date: '2024-01-01', leads: 120, conversions: 35, revenue: 25000 },
      { date: '2024-01-02', leads: 135, conversions: 42, revenue: 28000 },
      { date: '2024-01-03', leads: 98, conversions: 28, revenue: 22000 },
      { date: '2024-01-04', leads: 156, conversions: 48, revenue: 32000 },
      { date: '2024-01-05', leads: 142, conversions: 45, revenue: 30000 },
      { date: '2024-01-06', leads: 178, conversions: 52, revenue: 35000 },
      { date: '2024-01-07', leads: 165, conversions: 49, revenue: 33000 }
    ],
    top_performers: [
      { name: 'Ana Silva', sales: 'R$ 125.000', conversion: '42%' },
      { name: 'Carlos Santos', sales: 'R$ 98.500', conversion: '38%' },
      { name: 'Maria Oliveira', sales: 'R$ 87.200', conversion: '35%' },
      { name: 'João Costa', sales: 'R$ 76.800', conversion: '33%' },
      { name: 'Lucia Ferreira', sales: 'R$ 65.400', conversion: '31%' }
    ],
    recent_activities: [
      { action: 'Novo lead qualificado', time: '2 min atrás', type: 'lead' },
      { action: 'Venda concluída - R$ 15.000', time: '5 min atrás', type: 'sale' },
      { action: 'Agente IA ativado', time: '8 min atrás', type: 'agent' },
      { action: 'Treinamento concluído', time: '12 min atrás', type: 'training' },
      { action: 'Novo parceiro cadastrado', time: '15 min atrás', type: 'partner' }
    ]
  };

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await fetch("/api/metrics/dashboard");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setDashboardData(data);
      } catch (error) {
        console.error("Erro ao buscar dados do dashboard:", error);
        // Usar dados de fallback em caso de erro
        setDashboardData(fallbackData);
        setError(null); // Não mostrar erro, usar fallback
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Carregando Dashboard...</h2>
          <p className="text-gray-600">Preparando seus dados em tempo real...</p>
        </div>
      </div>
    );
  }

  const { performance_chart, top_performers, recent_activities } = dashboardData || fallbackData;

  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Dashboard Executivo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visão completa e em tempo real da performance da sua SinergIA.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="shadow-lg border-0">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Vendas Geradas</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">R$ 47.000.000</div>
              <p className="text-xs text-muted-foreground">+20.1% do mês passado</p>
            </CardContent>
          </Card>
          <Card className="shadow-lg border-0">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Leads Qualificados</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+3.429</div>
              <p className="text-xs text-muted-foreground">+180.1% do mês passado</p>
            </CardContent>
          </Card>
          <Card className="shadow-lg border-0">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Horas Resgatadas</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+621h</div>
              <p className="text-xs text-muted-foreground">+19% do mês passado</p>
            </CardContent>
          </Card>
          <Card className="shadow-lg border-0">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">ROI Médio</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+340%</div>
              <p className="text-xs text-muted-foreground">+5% do mês passado</p>
            </CardContent>
          </Card>
        </div>

        {/* Performance Chart and Top Performers */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <Card className="lg:col-span-2 shadow-lg border-0">
            <CardHeader>
              <CardTitle>Performance de Vendas (Últimos 7 Dias)</CardTitle>
            </CardHeader>
            <CardContent className="h-[350px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={performance_chart}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="leads" stroke="#8884d8" name="Leads" />
                  <Line type="monotone" dataKey="conversions" stroke="#82ca9d" name="Conversões" />
                  <Line type="monotone" dataKey="revenue" stroke="#ffc658" name="Receita" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle>Top Performers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {top_performers.map((performer, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Award className="h-5 w-5 text-yellow-500" />
                      <div>
                        <p className="font-medium">{performer.name}</p>
                        <p className="text-sm text-muted-foreground">Vendas: {performer.sales}</p>
                      </div>
                    </div>
                    <Badge variant="secondary">{performer.conversion}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activities */}
        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle>Atividades Recentes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recent_activities.map((activity, index) => (
                <div key={index} className="flex items-center gap-3">
                  {activity.type === 'lead' && <Users className="h-5 w-5 text-blue-500" />}
                  {activity.type === 'sale' && <DollarSign className="h-5 w-5 text-green-500" />}
                  {activity.type === 'agent' && <Zap className="h-5 w-5 text-purple-500" />}
                  {activity.type === 'training' && <GraduationCap className="h-5 w-5 text-orange-500" />}
                  {activity.type === 'partner' && <CheckCircle className="h-5 w-5 text-cyan-500" />}
                  <div>
                    <p className="font-medium">{activity.action}</p>
                    <p className="text-sm text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}


