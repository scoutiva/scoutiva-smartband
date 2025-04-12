import json
from utils import suggest_route

def analyze_crowd(data_path):
    with open(data_path, 'r') as f:
        data = json.load(f)

    alerts = []
    for zone in data['zones']:
        density = zone['density']
        if density > 80:
            alerts.append(f"⚠️ {zone['name']} مزدحم بنسبة {density}%، يُفضل تجنب هذه المنطقة.")
        elif density > 50:
            alerts.append(f"🔶 {zone['name']} به ازدحام متوسط ({density}%)، كن حذرًا.")
        else:
            alerts.append(f"✅ {zone['name']} آمن ({density}%).")
    
    return alerts

if __name__ == "__main__":
    alerts = analyze_crowd("data/mock_sensors.json")
    for alert in alerts:
        print(alert)

    print("\n📍 التوجيه الذكي:")
    print(suggest_route("البوابة 3", "المقعد A15"))
