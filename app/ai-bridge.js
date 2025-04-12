// ai-bridge.js

// هذا الكود يقوم بمحاكاة ربط السوار بنتائج الذكاء الاصطناعي
fetch('../ai-prototype/sample_output.json')
  .then(response => response.json())
  .then(data => {
    const alert = data.zone_alert; // نأخذ التنبيه من النموذج

    if (alert) {
      // تغيير سلوك السوار: تنبيهات
      triggerVibration();
      flashLED();
      showCrowdWarning();
    }
  })
  .catch(error => {
    console.error('Error fetching AI data:', error);
  });

// محاكاة وظائف السوار
function triggerVibration() {
  console.log('🔔 السوار يهتز بسبب الازدحام!');
  document.body.style.backgroundColor = '#ffcccc';
}

function flashLED() {
  console.log('💡 وميض LED تم تفعيله');
  document.getElementById('led-indicator').style.backgroundColor = '#ff0';
}

function showCrowdWarning() {
  const warning = document.getElementById('ai-warning');
  warning.style.display = 'block';
  warning.innerText = '🚨 تنبيه: منطقة مزدحمة قريبة! الرجاء تغيير المسار.';
}
