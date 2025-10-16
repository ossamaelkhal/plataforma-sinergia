from flask import Blueprint, jsonify
import random
from datetime import datetime, timedelta

metrics_bp = Blueprint('metrics', __name__)

# Dados simulados para demonstração
base_metrics = {
    'hours_rescued': 621,
    'leads_qualified': 3429,
    'avg_roi': 340,
    'pmes_liberated': 1247
}

@metrics_bp.route('/metrics/realtime', methods=['GET'])
def get_realtime_metrics():
    """Retorna métricas em tempo real com pequenas variações"""
    current_metrics = {
        'hours_rescued': base_metrics['hours_rescued'] + random.randint(0, 10),
        'leads_qualified': base_metrics['leads_qualified'] + random.randint(0, 50),
        'avg_roi': base_metrics['avg_roi'] + random.randint(-5, 15),
        'pmes_liberated': base_metrics['pmes_liberated'] + random.randint(0, 5),
        'timestamp': datetime.now().isoformat()
    }
    return jsonify(current_metrics)

@metrics_bp.route('/metrics/systems', methods=['GET'])
def get_systems_metrics():
    """Retorna métricas específicas dos sistemas de IA"""
    systems_data = {
        'sales_marketing': {
            'roi': '280%',
            'time_saved': '12h/semana',
            'leads': '2,847',
            'conversion': '34.2%',
            'revenue': 'R$ 1.2M'
        },
        'customer_service': {
            'roi': '320%',
            'time_saved': '25h/semana',
            'tickets': '15,432',
            'satisfaction': '96.8%',
            'response_time': '< 30s'
        },
        'operations': {
            'roi': '450%',
            'time_saved': '30h/semana',
            'processes': '1,247',
            'efficiency': '+89%',
            'errors': '-94%'
        }
    }
    return jsonify(systems_data)

@metrics_bp.route('/metrics/academy', methods=['GET'])
def get_academy_metrics():
    """Retorna métricas da SinergIA Academy"""
    academy_data = {
        'certified_sellers': 2847,
        'generated_sales': 47000000,  # R$ 47M
        'avg_sales_increase': 340,
        'approval_rate': 94,
        'active_students': 1523,
        'completed_courses': 8934
    }
    return jsonify(academy_data)

@metrics_bp.route('/metrics/dashboard', methods=['GET'])
def get_dashboard_data():
    """Retorna dados completos para o dashboard"""
    # Simular dados de performance dos últimos 30 dias
    performance_data = []
    base_date = datetime.now() - timedelta(days=30)
    
    for i in range(30):
        date = base_date + timedelta(days=i)
        performance_data.append({
            'date': date.strftime('%Y-%m-%d'),
            'leads': random.randint(80, 150),
            'conversions': random.randint(20, 45),
            'revenue': random.randint(15000, 35000)
        })
    
    dashboard_data = {
        'performance_chart': performance_data,
        'top_performers': [
            {'name': 'Ana Silva', 'sales': 'R$ 125.000', 'conversion': '42%'},
            {'name': 'Carlos Santos', 'sales': 'R$ 98.500', 'conversion': '38%'},
            {'name': 'Maria Oliveira', 'sales': 'R$ 87.200', 'conversion': '35%'},
            {'name': 'João Costa', 'sales': 'R$ 76.800', 'conversion': '33%'},
            {'name': 'Lucia Ferreira', 'sales': 'R$ 65.400', 'conversion': '31%'}
        ],
        'recent_activities': [
            {'action': 'Novo lead qualificado', 'time': '2 min atrás', 'type': 'lead'},
            {'action': 'Venda concluída - R$ 15.000', 'time': '5 min atrás', 'type': 'sale'},
            {'action': 'Agente IA ativado', 'time': '8 min atrás', 'type': 'agent'},
            {'action': 'Treinamento concluído', 'time': '12 min atrás', 'type': 'training'},
            {'action': 'Novo parceiro cadastrado', 'time': '15 min atrás', 'type': 'partner'}
        ]
    }
    
    return jsonify(dashboard_data)

