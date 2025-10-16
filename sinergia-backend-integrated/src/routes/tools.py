from flask import Blueprint, jsonify, request
import random
from datetime import datetime

tools_bp = Blueprint('tools', __name__)

@tools_bp.route('/tools/architect', methods=['POST'])
def solution_architect():
    """Arquiteto de Soluções SinergIA - Análise personalizada"""
    data = request.get_json()
    
    # Simular análise baseada nos dados fornecidos
    business_type = data.get('business_type', 'generic')
    company_size = data.get('company_size', 'small')
    main_challenges = data.get('challenges', [])
    
    # Lógica simplificada de recomendação
    recommendations = {
        'recommended_systems': [],
        'estimated_roi': random.randint(200, 500),
        'implementation_time': random.randint(2, 8),
        'monthly_savings': random.randint(5000, 25000),
        'roadmap': []
    }
    
    # Recomendações baseadas no tipo de negócio
    if business_type in ['healthcare', 'clinic']:
        recommendations['recommended_systems'] = ['Agendamento Inteligente', 'Prontuário Automatizado']
        recommendations['roadmap'] = [
            'Semana 1-2: Configuração do sistema de agendamento',
            'Semana 3-4: Integração com prontuário eletrônico',
            'Semana 5-6: Treinamento da equipe',
            'Semana 7-8: Go-live e otimizações'
        ]
    elif business_type in ['ecommerce', 'retail']:
        recommendations['recommended_systems'] = ['Atendimento Automatizado', 'Gestão de Estoque IA']
        recommendations['roadmap'] = [
            'Semana 1-2: Setup do chatbot inteligente',
            'Semana 3-4: Integração com sistema de estoque',
            'Semana 5-6: Configuração de alertas automáticos',
            'Semana 7-8: Lançamento e monitoramento'
        ]
    else:
        recommendations['recommended_systems'] = ['Qualificação de Leads', 'Automação de Processos']
        recommendations['roadmap'] = [
            'Semana 1-2: Análise de processos atuais',
            'Semana 3-4: Implementação do sistema de leads',
            'Semana 5-6: Automação de fluxos críticos',
            'Semana 7-8: Otimização e expansão'
        ]
    
    return jsonify({
        'analysis_id': f"ARCH_{datetime.now().strftime('%Y%m%d_%H%M%S')}",
        'recommendations': recommendations,
        'next_steps': [
            'Agendar reunião de alinhamento',
            'Definir cronograma detalhado',
            'Iniciar implementação piloto'
        ]
    })

@tools_bp.route('/tools/roi-calculator', methods=['POST'])
def calculate_roi():
    """Calculadora de ROI SinergIA"""
    data = request.get_json()
    
    monthly_revenue = data.get('monthly_revenue', 100000)
    employees = data.get('employees', 10)
    manual_hours = data.get('manual_hours_per_week', 20)
    hourly_cost = data.get('hourly_cost', 50)
    
    # Cálculos de ROI
    monthly_manual_cost = manual_hours * 4 * hourly_cost  # 4 semanas por mês
    automation_savings = monthly_manual_cost * 0.8  # 80% de economia
    productivity_increase = monthly_revenue * 0.15  # 15% de aumento
    total_monthly_benefit = automation_savings + productivity_increase
    
    investment_cost = 5000  # Custo base da implementação
    monthly_subscription = 1500  # Custo mensal
    
    roi_percentage = ((total_monthly_benefit - monthly_subscription) * 12 - investment_cost) / investment_cost * 100
    payback_months = investment_cost / (total_monthly_benefit - monthly_subscription)
    
    return jsonify({
        'calculation_id': f"ROI_{datetime.now().strftime('%Y%m%d_%H%M%S')}",
        'results': {
            'monthly_savings': automation_savings,
            'productivity_gain': productivity_increase,
            'total_monthly_benefit': total_monthly_benefit,
            'roi_percentage': round(roi_percentage, 1),
            'payback_months': round(payback_months, 1),
            'annual_benefit': total_monthly_benefit * 12,
            'investment_cost': investment_cost,
            'monthly_cost': monthly_subscription
        },
        'projections': {
            '6_months': total_monthly_benefit * 6 - investment_cost - monthly_subscription * 6,
            '12_months': total_monthly_benefit * 12 - investment_cost - monthly_subscription * 12,
            '24_months': total_monthly_benefit * 24 - investment_cost - monthly_subscription * 24
        }
    })

@tools_bp.route('/tools/flow-simulator', methods=['POST'])
def simulate_flow():
    """Simulador de Fluxos de Automação"""
    data = request.get_json()
    
    flow_steps = data.get('steps', [])
    flow_name = data.get('name', 'Fluxo Personalizado')
    
    # Simular análise do fluxo
    estimated_time_saved = len(flow_steps) * random.randint(15, 45)  # minutos por step
    complexity_score = min(len(flow_steps) * 10, 100)
    
    simulation_result = {
        'flow_id': f"FLOW_{datetime.now().strftime('%Y%m%d_%H%M%S')}",
        'flow_name': flow_name,
        'analysis': {
            'total_steps': len(flow_steps),
            'estimated_time_saved_per_execution': f"{estimated_time_saved} minutos",
            'complexity_score': complexity_score,
            'automation_feasibility': 'Alta' if complexity_score < 70 else 'Média',
            'estimated_implementation_time': f"{len(flow_steps) * 2} dias"
        },
        'optimizations': [
            'Combinar steps similares para reduzir complexidade',
            'Adicionar validações automáticas',
            'Implementar tratamento de erros',
            'Configurar notificações de status'
        ],
        'export_options': {
            'n8n': True,
            'zapier': True,
            'custom_api': True
        }
    }
    
    return jsonify(simulation_result)

@tools_bp.route('/tools/demo-data', methods=['GET'])
def get_demo_data():
    """Dados para o Dashboard Demo"""
    demo_data = {
        'metrics': {
            'active_automations': random.randint(15, 25),
            'time_saved_today': random.randint(8, 15),
            'leads_processed': random.randint(45, 85),
            'conversion_rate': round(random.uniform(25, 45), 1)
        },
        'chart_data': [
            {'name': 'Jan', 'leads': random.randint(80, 120), 'conversions': random.randint(20, 40)},
            {'name': 'Fev', 'leads': random.randint(85, 125), 'conversions': random.randint(22, 42)},
            {'name': 'Mar', 'leads': random.randint(90, 130), 'conversions': random.randint(25, 45)},
            {'name': 'Abr', 'leads': random.randint(95, 135), 'conversions': random.randint(28, 48)},
            {'name': 'Mai', 'leads': random.randint(100, 140), 'conversions': random.randint(30, 50)},
            {'name': 'Jun', 'leads': random.randint(105, 145), 'conversions': random.randint(32, 52)}
        ],
        'recent_activities': [
            {'type': 'automation', 'message': 'Novo fluxo de qualificação ativado', 'time': '2 min'},
            {'type': 'lead', 'message': 'Lead qualificado automaticamente', 'time': '5 min'},
            {'type': 'conversion', 'message': 'Conversão realizada - R$ 8.500', 'time': '8 min'},
            {'type': 'system', 'message': 'Sistema de IA otimizado', 'time': '12 min'}
        ]
    }
    
    return jsonify(demo_data)

