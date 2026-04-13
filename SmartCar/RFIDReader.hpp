#ifndef RFIDReader_H
#define RFIDReader_H

#include <Wire.h>

#include "Arduino.h"
#include "SmartCar/MFRC522_I2C.hpp"
#include "SmartCar/Pinout.hpp"

namespace RFIDReader {
/*Creating the Class for RFID Reader*/
extern MFRC522 mfrc522;
struct RFIDTag {
  char uid[9];
};

void Init();
String GetTagUID();
}  // namespace RFIDReader

#endif