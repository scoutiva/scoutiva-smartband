# 🤝 CONTRIBUTING.md – Scoutiva App

Thank you for considering contributing to the Scoutiva Smartband project!

---

## 🧰 How to Contribute

1. **Fork the repository**
2. **Create a new branch** for your feature or bugfix
3. **Commit your changes** with clear messages
4. **Push your branch** and submit a Pull Request (PR)

---

## 🧪 Running Locally

Make sure you have:
- ESP32 flashed with firmware
- MicroPython or Node.js set up
- USB-to-Serial connection

To run:
```bash
mpremote connect /dev/ttyUSB0 run main.py
```

---

## 📂 Folder Structure Overview

- `sensors/`: Sensor input handling
- `ai-bridge.js`: AI middleware
- `navigation/`: Route logic
- `alerts/`: Feedback mechanisms
- `ui/`: Display UI (if used)
- `test/`: Simulations and unit tests

---

## 📬 Reporting Issues

Please use the [GitHub Issues tab](../../issues) to report bugs or suggest features.

---

Made with ❤️ by Team Scoutiva 🇸🇦