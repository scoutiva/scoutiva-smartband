
📱 Scoutiva App – Smartband Core

This directory contains the core application logic of the **Scoutiva Smartband**, designed to enhance the fan experience at stadiums through AI, real-time navigation, and AR integration.

---

📦 Contents

- sensors/ – Code for interacting with onboard sensors (GPS, accelerometer, temperature, etc.)
- ai-bridge.js – Middleware that connects sensor data to AI decision modules
- navigation/ – Real-time routing logic using SmartRoute Engine
- alerts/ – Emergency and guidance alert logic (vibrations, lights, haptics)
- ui/ – User interface for the wristband display (if applicable)
- config/ – Configuration files (thresholds, settings, profiles)
- test/ – Simulated data and unit tests

---

🚀 Getting Started

### Prerequisites

- ESP32 or compatible microcontroller
- MicroPython or Node.js (depending on environment)
- Edge TPU (for AI acceleration, optional)
- USB-to-Serial cable for flashing
- Arduino IDE / PlatformIO / VS Code

### Running the App (Example for MicroPython):

# Flash firmware
esptool.py --port /dev/ttyUSB0 erase_flash
esptool.py --port /dev/ttyUSB0 --baud 460800 write_flash -z 0x1000 firmware.bin

# Upload code
mpremote connect /dev/ttyUSB0 fs cp -r . :
mpremote connect /dev/ttyUSB0 run main.py

---

⚙️ How It Works

1. Sensors gather real-time data (crowd proximity, motion, temperature).
2. ai-bridge.js collects and processes the data.
3. AI modules predict crowd flow, detect anomalies, and generate route decisions.
4. Feedback is sent to the user via haptic feedback and on-screen UI.
5. All processing is optimized for edge devices to minimize latency.

---

🧪 Testing

- Simulated crowd data: test/mock-crowds.json
- Unit tests using pytest or custom test runner in test/

---

📄 Notes

- Ensure all sensor drivers are properly installed.
- AI logic is modular and separated for ease of testing and updating.
- For full AI pipeline, refer to docs/AI_LOGIC.md

---

Made with ❤️ by Team Scoutiva 🇸🇦
