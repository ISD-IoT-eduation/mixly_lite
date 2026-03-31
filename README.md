<p align="center">
  <a href="https://mixly3.gitee.io/mixly3.0_src">
    <img src="https://foruda.gitee.com/images/1677155717148882961/0c044ac0_5225463.png" width="100" alt="Mixly">
  </a>
</p>
<h2 align="center">Mixly-lite (ISD-IoT Fork)</h2>

Original Repo: https://github.com/mixly/mixly_lite

---

## SmartCar Custom Blocks

This fork adds custom block modules for the **ESP32 IoT Smart Car** project, supporting the following boards:
- **Arduino ESP32** (C++ code generation)
- **MicroPython ESP32-S3** (MicroPython code generation)

### Available Blocks

| Category | Blocks | Description |
|----------|--------|-------------|
| **Motors** | move_forward, move_backward, rotate_left, rotate_right, stop | Motor control |
| **Motors** | set_servo_angle, set_speed | Servo and speed control |
| **IR Sensors** | read_ir_left, read_ir_middle, read_ir_right | IR sensor reading |
| **IR Sensors** | get_track_state | Get line-tracking state |
| **Ultrasonic** | get_distance_cm | Ultrasonic distance measurement |
| **RFID** | read_rfid_tag, has_new_tag | RFID tag reading |
| **Buzzer** | play_tone, buzzer_stop | Buzzer control |
| **Firebase** | is_exam_activated, get_traffic_light_state, get_time_remain | Firebase cloud communication |
| **PID Control** | set_pid_gains, get_left_rpm, get_right_rpm, set_target_rpm | PID speed control |

### Code Generation Examples

**Arduino ESP32:**
```cpp
#include "SmartCar/Movement.hpp"
Movement::MoveForward();
```

**MicroPython ESP32-S3:**
```python
from smartcar import Movement
Movement.move_forward()
```

## Running Locally

```bash
python3 serve.py
```
Then open http://localhost:3000
