#ifndef UltraSonicSensor_H
#define UltraSonicSensor_H
#include "SmartCar/Pinout.hpp"
#include "Arduino.h"

namespace UltrasonicSensor{
  void Init();
  float GetDistance();
}

#endif