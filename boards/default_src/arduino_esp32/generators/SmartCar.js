// ============================================
// SmartCar Code Generators for Arduino ESP32
// ============================================

// ============================================
// MOTOR GENERATORS
// ============================================

export const smartcar_move_forward = function (_, generator) {
    generator.definitions_['include_SmartCar_Movement'] = '#include "SmartCar/Movement.hpp"';
    generator.definitions_['include_SmartCar_MotorControl'] = '#include "SmartCar/MotorControl.hpp"';
    generator.setups_['smartcar_init_motors'] = 'MotorControl::DCMotorControl::Init();\n  MotorControl::ServoMotorControl::Init();';

    var code = 'Movement::MoveForward();\n';
    return code;
};

export const smartcar_move_backward = function (_, generator) {
    generator.definitions_['include_SmartCar_Movement'] = '#include "SmartCar/Movement.hpp"';
    generator.definitions_['include_SmartCar_MotorControl'] = '#include "SmartCar/MotorControl.hpp"';
    generator.setups_['smartcar_init_motors'] = 'MotorControl::DCMotorControl::Init();\n  MotorControl::ServoMotorControl::Init();';

    var code = 'Movement::MoveBackward();\n';
    return code;
};

export const smartcar_rotate_left = function (_, generator) {
    generator.definitions_['include_SmartCar_Movement'] = '#include "SmartCar/Movement.hpp"';
    generator.definitions_['include_SmartCar_MotorControl'] = '#include "SmartCar/MotorControl.hpp"';
    generator.setups_['smartcar_init_motors'] = 'MotorControl::DCMotorControl::Init();\n  MotorControl::ServoMotorControl::Init();';

    var code = 'Movement::RotateLeft();\n';
    return code;
};

export const smartcar_rotate_right = function (_, generator) {
    generator.definitions_['include_SmartCar_Movement'] = '#include "SmartCar/Movement.hpp"';
    generator.definitions_['include_SmartCar_MotorControl'] = '#include "SmartCar/MotorControl.hpp"';
    generator.setups_['smartcar_init_motors'] = 'MotorControl::DCMotorControl::Init();\n  MotorControl::ServoMotorControl::Init();';

    var code = 'Movement::RotateRight();\n';
    return code;
};

export const smartcar_stop = function (_, generator) {
    generator.definitions_['include_SmartCar_Movement'] = '#include "SmartCar/Movement.hpp"';
    generator.setups_['smartcar_init_motors'] = 'MotorControl::DCMotorControl::Init();';

    var code = 'Movement::Stop();\n';
    return code;
};

export const smartcar_set_servo_angle = function (_, generator) {
    generator.definitions_['include_SmartCar_Movement'] = '#include "SmartCar/Movement.hpp"';
    generator.definitions_['include_SmartCar_MotorControl'] = '#include "SmartCar/MotorControl.hpp"';
    generator.setups_['smartcar_init_servo'] = 'MotorControl::ServoMotorControl::Init();';

    var angle = generator.valueToCode(this, 'ANGLE', generator.ORDER_ATOMIC) || '90';
    var code = 'MotorControl::FrontWheel.TargetAngle = ' + angle + ';\n';
    code += 'MotorControl::ServoMotorControl::TurnDeg(MotorControl::FrontWheel);\n';
    return code;
};

export const smartcar_set_speed = function (_, generator) {
    generator.definitions_['include_SmartCar_MotorControl'] = '#include "SmartCar/MotorControl.hpp"';
    generator.setups_['smartcar_init_motors'] = 'MotorControl::DCMotorControl::Init();';

    var speed = generator.valueToCode(this, 'SPEED', generator.ORDER_ATOMIC) || '0';
    var code = 'MotorControl::LeftWheel.Speed = ' + speed + ';\n';
    code += 'MotorControl::RightWheel.Speed = ' + speed + ';\n';
    return code;
};

// ============================================
// IR SENSOR GENERATORS
// ============================================

export const smartcar_read_ir_left = function (_, generator) {
    generator.definitions_['include_SmartCar_IRSensors'] = '#include "SmartCar/IRSensors.hpp"';
    generator.setups_['smartcar_init_ir'] = 'IRSensors::Init();';

    var code = 'IRSensors::IRData.Read_IR_L';
    return [code, generator.ORDER_ATOMIC];
};

export const smartcar_read_ir_middle = function (_, generator) {
    generator.definitions_['include_SmartCar_IRSensors'] = '#include "SmartCar/IRSensors.hpp"';
    generator.setups_['smartcar_init_ir'] = 'IRSensors::Init();';

    var code = 'IRSensors::IRData.Read_IR_M';
    return [code, generator.ORDER_ATOMIC];
};

export const smartcar_read_ir_right = function (_, generator) {
    generator.definitions_['include_SmartCar_IRSensors'] = '#include "SmartCar/IRSensors.hpp"';
    generator.setups_['smartcar_init_ir'] = 'IRSensors::Init();';

    var code = 'IRSensors::IRData.Read_IR_R';
    return [code, generator.ORDER_ATOMIC];
};

export const smartcar_get_track_state = function (_, generator) {
    generator.definitions_['include_SmartCar_IRSensors'] = '#include "SmartCar/IRSensors.hpp"';
    generator.setups_['smartcar_init_ir'] = 'IRSensors::Init();';

    var code = 'IRSensors::ReadSensorState(IRSensors::IRData)';
    return [code, generator.ORDER_ATOMIC];
};

// ============================================
// ULTRASONIC SENSOR GENERATORS
// ============================================

export const smartcar_get_distance_cm = function (_, generator) {
    generator.definitions_['include_SmartCar_UltrasonicSensor'] = '#include "SmartCar/UltrasonicSensor.hpp"';
    generator.setups_['smartcar_init_ultrasonic'] = 'UltrasonicSensor::Init();';

    var code = 'UltrasonicSensor::GetDistance()';
    return [code, generator.ORDER_ATOMIC];
};

// ============================================
// RFID GENERATORS
// ============================================

export const smartcar_read_rfid_tag = function (_, generator) {
    generator.definitions_['include_SmartCar_RFIDReader'] = '#include "SmartCar/RFIDReader.hpp"';
    generator.setups_['smartcar_init_rfid'] = 'RFIDReader::Init();';

    var code = 'RFIDReader::GetTagUID()';
    return [code, generator.ORDER_ATOMIC];
};

export const smartcar_has_new_tag = function (_, generator) {
    generator.definitions_['include_SmartCar_RFIDReader'] = '#include "SmartCar/RFIDReader.hpp"';
    generator.setups_['smartcar_init_rfid'] = 'RFIDReader::Init();';

    var code = 'RFIDReader::mfrc522.PICC_IsNewCardPresent()';
    return [code, generator.ORDER_ATOMIC];
};

// ============================================
// BUZZER GENERATORS
// ============================================

export const smartcar_play_tone = function (_, generator) {
    generator.definitions_['include_SmartCar_Buzzer'] = '#include "SmartCar/Buzzer.hpp"';
    generator.definitions_['include_SmartCar_Pinout'] = '#include "SmartCar/Pinout.hpp"';
    generator.setups_['smartcar_init_buzzer'] = 'Buzzer::Init();';

    var frequency = generator.valueToCode(this, 'FREQUENCY', generator.ORDER_ATOMIC) || '440';
    var duration = generator.valueToCode(this, 'DURATION', generator.ORDER_ATOMIC) || '100';

    var code = 'tone(Pinout::Buzzer, ' + frequency + ', ' + duration + ');\n';
    return code;
};

export const smartcar_buzzer_stop = function (_, generator) {
    generator.definitions_['include_SmartCar_Pinout'] = '#include "SmartCar/Pinout.hpp"';

    var code = 'noTone(Pinout::Buzzer);\n';
    return code;
};

// ============================================
// FIREBASE GENERATORS
// ============================================

export const smartcar_is_exam_activated = function (_, generator) {
    generator.definitions_['include_SmartCar_config'] = '#include "SmartCar/config.h"';

    var code = 'examState.activated';
    return [code, generator.ORDER_ATOMIC];
};

export const smartcar_get_traffic_light_state = function (_, generator) {
    generator.definitions_['include_SmartCar_config'] = '#include "SmartCar/config.h"';

    var lightId = generator.valueToCode(this, 'LIGHT_ID', generator.ORDER_ATOMIC) || '0';

    var code = 'trafficLights[' + lightId + '].current_state';
    return [code, generator.ORDER_ATOMIC];
};

export const smartcar_get_time_remain = function (_, generator) {
    generator.definitions_['include_SmartCar_config'] = '#include "SmartCar/config.h"';

    var lightId = generator.valueToCode(this, 'LIGHT_ID', generator.ORDER_ATOMIC) || '0';

    var code = 'trafficLights[' + lightId + '].time_remain';
    return [code, generator.ORDER_ATOMIC];
};

// ============================================
// PID CONTROL GENERATORS
// ============================================

const smartcarAddPIDDefinitions = function (generator) {
    generator.definitions_['include_SmartCar_MotorControl'] = '#include "SmartCar/MotorControl.hpp"';
    generator.definitions_['smartcar_pid_controller'] =
        'struct SmartCarPID_t {\n'
        + '  volatile float Kp = 0.0f;\n'
        + '  volatile float Ki = 0.0f;\n'
        + '  volatile float Kd = 0.0f;\n'
        + '  volatile float target_val = 150.0f;\n'
        + '  float actual_val = 0.0f;\n'
        + '  float err = 0.0f;\n'
        + '  float err_last = 0.0f;\n'
        + '  float integral = 0.0f;\n'
        + '  float PID_realize(float temp_val) {\n'
        + '    err = target_val - temp_val;\n'
        + '    integral += err;\n'
        + '    actual_val = Kp * err + Ki * integral + Kd * (err - err_last);\n'
        + '    err_last = err;\n'
        + '    return actual_val;\n'
        + '  }\n'
        + '};\n'
        + 'SmartCarPID_t LeftWheelPID;\n'
        + 'SmartCarPID_t RightWheelPID;';
};

export const smartcar_set_pid_gains = function (_, generator) {
    smartcarAddPIDDefinitions(generator);

    var kp = generator.valueToCode(this, 'KP', generator.ORDER_ATOMIC) || '0';
    var ki = generator.valueToCode(this, 'KI', generator.ORDER_ATOMIC) || '0';
    var kd = generator.valueToCode(this, 'KD', generator.ORDER_ATOMIC) || '0';

    var code = 'LeftWheelPID.Kp = ' + kp + ';\n';
    code += 'LeftWheelPID.Ki = ' + ki + ';\n';
    code += 'LeftWheelPID.Kd = ' + kd + ';\n';
    code += 'RightWheelPID.Kp = ' + kp + ';\n';
    code += 'RightWheelPID.Ki = ' + ki + ';\n';
    code += 'RightWheelPID.Kd = ' + kd + ';\n';
    return code;
};

export const smartcar_get_left_rpm = function (_, generator) {
    generator.definitions_['include_SmartCar_MotorControl'] = '#include "SmartCar/MotorControl.hpp"';
    generator.setups_['smartcar_init_encoder'] = 'Encoder::Init();';

    var code = 'LeftWheelRPM.rpm';
    return [code, generator.ORDER_ATOMIC];
};

export const smartcar_get_right_rpm = function (_, generator) {
    generator.definitions_['include_SmartCar_MotorControl'] = '#include "SmartCar/MotorControl.hpp"';
    generator.setups_['smartcar_init_encoder'] = 'Encoder::Init();';

    var code = 'RightWheelRPM.rpm';
    return [code, generator.ORDER_ATOMIC];
};

export const smartcar_set_target_rpm = function (_, generator) {
    smartcarAddPIDDefinitions(generator);

    var target = generator.valueToCode(this, 'TARGET', generator.ORDER_ATOMIC) || '150';

    var code = 'LeftWheelPID.target_val = ' + target + ';\n';
    code += 'RightWheelPID.target_val = ' + target + ';\n';
    return code;
};

export const smartcar_pid_update_loop = function (_, generator) {
    smartcarAddPIDDefinitions(generator);
    generator.setups_['smartcar_init_motors'] = 'MotorControl::DCMotorControl::Init();\n  MotorControl::ServoMotorControl::Init();';
    generator.setups_['smartcar_init_encoder'] = 'Encoder::Init();';

    var code = 'Encoder::RPMCounterFromEncoder(LeftWheelRPM);\n';
    code += 'Encoder::RPMCounterFromEncoder(RightWheelRPM);\n';
    code += 'MotorControl::LeftWheel.Speed = constrain((int)LeftWheelPID.PID_realize(LeftWheelRPM.rpm), 0, 4095);\n';
    code += 'MotorControl::RightWheel.Speed = constrain((int)RightWheelPID.PID_realize(RightWheelRPM.rpm), 0, 4095);\n';

    return code;
};

// ============================================
// IMU SENSOR GENERATORS
// ============================================

const smartcarAddIMUDefinitions = function (generator) {
    generator.definitions_['include_SmartCar_Imu'] = '#include "SmartCar/IMU.h"';
    generator.setups_['smartcar_init_imu'] = 'ICM42688::begin();\n';
    generator.definitions_['define_SDA'] = '#define IMU_SDA 17';
    generator.definitions_['define_SCL'] = '#define IMU_SCL 18';
    generator.definitions_['smartcar_imu_filter_constants'] =
        'float LowPassFilterAlpha = 0.2f;\n'
        + 'float LowPassFilterBeta = 0.8f;\n'
        + 'const float ComplementaryFilterALPHA = 0.98f;\n'
        + 'const float SmartCarIMU_dt = 0.01f;';
    generator.definitions_['smartcar_imu_state'] =
        'float SmartCarIMU_filteredAccX = 0.0f;\n'
        + 'float SmartCarIMU_filteredAccY = 0.0f;\n'
        + 'float SmartCarIMU_filteredAccZ = 0.0f;\n'
        + 'float SmartCarIMU_filteredGyroX = 0.0f;\n'
        + 'float SmartCarIMU_filteredGyroY = 0.0f;\n'
        + 'float SmartCarIMU_filteredGyroZ = 0.0f;\n'
        + 'float SmartCarIMU_roll = 0.0f;\n'
        + 'float SmartCarIMU_pitch = 0.0f;\n'
        + 'float SmartCarIMU_yaw = 0.0f;';
    generator.definitions_['smartcar_create_imu_object']= 'ICM42688 IMU(Wire, 0x68, IMU_SDA, IMU_SCL);';
};

export const smartcar_imu_init = function (_, generator) {
    smartcarAddIMUDefinitions(generator);
    generator.setups_['smartcar_init_imu'] = 'int status = IMU.begin();\n'
        + '  if (status < 0) {\n'
        + '    Serial.println("IMU initialization unsuccessful");\n'
        + '    Serial.println("Check IMU wiring or try cycling power");\n'
        + '    Serial.print("Status: ");\n'
        + '    Serial.println(status);\n'
        + '    while (1) {}\n'
        + '  }\n'
        + '  IMU.setAccelFS(ICM42688::gpm8);\n'
        + '  IMU.setGyroFS(ICM42688::dps500);\n'
        + '  IMU.setAccelODR(ICM42688::odr12_5);\n'
        + '  IMU.setGyroODR(ICM42688::odr12_5);\n'
        + '  Serial.println("---IMU Initialized---");';
    return '';
};

export const smartcar_imu_set_filter = function (_, generator) {
    smartcarAddIMUDefinitions(generator);
    
    var gyro = generator.valueToCode(this, 'GyroFilters', generator.ORDER_ATOMIC) || 'true';
    var acc = generator.valueToCode(this, 'AccFilters', generator.ORDER_ATOMIC) || 'true';

    var code = 'IMU.setFilters(' + gyro + ', ' + acc + ');\n';

    return code;
};

export const smartcar_imu_set_filter_weight = function (_, generator) {
    smartcarAddIMUDefinitions(generator);

    var alpha = generator.valueToCode(this, 'Alpha', generator.ORDER_ATOMIC) || '0.2';
    var beta = generator.valueToCode(this, 'Beta', generator.ORDER_ATOMIC) || '0.8';

    var code = 'LowPassFilterAlpha = constrain((float)(' + alpha + '), 0.0f, 1.0f);\n';
    code += 'LowPassFilterBeta = constrain((float)(' + beta + '), 0.0f, 1.0f);\n';

    return code;
};

export const smartcar_imu_update = function (_, generator) {
    smartcarAddIMUDefinitions(generator);

    var code = '{\n';
    code += '  IMU.getAGT();\n';
    code += '  SmartCarIMU_filteredAccX = LowPassFilterAlpha * IMU.accX() + (1 - LowPassFilterAlpha) * SmartCarIMU_filteredAccX;\n';
    code += '  SmartCarIMU_filteredAccY = LowPassFilterAlpha * IMU.accY() + (1 - LowPassFilterAlpha) * SmartCarIMU_filteredAccY;\n';
    code += '  SmartCarIMU_filteredAccZ = LowPassFilterAlpha * IMU.accZ() + (1 - LowPassFilterAlpha) * SmartCarIMU_filteredAccZ;\n';
    code += '  SmartCarIMU_filteredGyroX = LowPassFilterBeta * IMU.gyrX() * DEG_TO_RAD + (1 - LowPassFilterBeta) * SmartCarIMU_filteredGyroX;\n';
    code += '  SmartCarIMU_filteredGyroY = LowPassFilterBeta * IMU.gyrY() * DEG_TO_RAD + (1 - LowPassFilterBeta) * SmartCarIMU_filteredGyroY;\n';
    code += '  SmartCarIMU_filteredGyroZ = LowPassFilterBeta * IMU.gyrZ() * DEG_TO_RAD + (1 - LowPassFilterBeta) * SmartCarIMU_filteredGyroZ;\n';
    code += '  float SmartCarIMU_accRoll = atan2(SmartCarIMU_filteredAccY, sqrt(SmartCarIMU_filteredAccX * SmartCarIMU_filteredAccX + SmartCarIMU_filteredAccZ * SmartCarIMU_filteredAccZ));\n';
    code += '  float SmartCarIMU_accPitch = atan2(-SmartCarIMU_filteredAccX, sqrt(SmartCarIMU_filteredAccY * SmartCarIMU_filteredAccY + SmartCarIMU_filteredAccZ * SmartCarIMU_filteredAccZ));\n';
    code += '  float SmartCarIMU_gyroRoll = SmartCarIMU_roll + SmartCarIMU_filteredGyroX * SmartCarIMU_dt;\n';
    code += '  float SmartCarIMU_gyroPitch = SmartCarIMU_pitch + SmartCarIMU_filteredGyroY * SmartCarIMU_dt;\n';
    code += '  float SmartCarIMU_gyroYaw = SmartCarIMU_yaw + SmartCarIMU_filteredGyroZ * SmartCarIMU_dt;\n';
    code += '  SmartCarIMU_roll = ComplementaryFilterALPHA * SmartCarIMU_gyroRoll + (1 - ComplementaryFilterALPHA) * SmartCarIMU_accRoll;\n';
    code += '  SmartCarIMU_pitch = ComplementaryFilterALPHA * SmartCarIMU_gyroPitch + (1 - ComplementaryFilterALPHA) * SmartCarIMU_accPitch;\n';
    code += '  SmartCarIMU_yaw = SmartCarIMU_gyroYaw;\n';
    code += '}\n';

    return code;
};

export const smartcar_imu_get_value = function (_, generator) {
    smartcarAddIMUDefinitions(generator);

    var value = this.getFieldValue('VALUE');
    var codeMap = {
        ACC_X: 'IMU.accX()',
        ACC_Y: 'IMU.accY()',
        ACC_Z: 'IMU.accZ()',
        GYRO_X: 'IMU.gyrX()',
        GYRO_Y: 'IMU.gyrY()',
        GYRO_Z: 'IMU.gyrZ()',
        FILTERED_ACC_X: 'SmartCarIMU_filteredAccX',
        FILTERED_ACC_Y: 'SmartCarIMU_filteredAccY',
        FILTERED_ACC_Z: 'SmartCarIMU_filteredAccZ',
        FILTERED_GYRO_X: 'SmartCarIMU_filteredGyroX',
        FILTERED_GYRO_Y: 'SmartCarIMU_filteredGyroY',
        FILTERED_GYRO_Z: 'SmartCarIMU_filteredGyroZ'
    };

    return [codeMap[value] || 'IMU.accX()', generator.ORDER_ATOMIC];
};

export const smartcar_imu_get_orientation = function (_, generator) {
    smartcarAddIMUDefinitions(generator);

    var value = this.getFieldValue('VALUE');
    var codeMap = {
        ROLL: 'SmartCarIMU_roll',
        PITCH: 'SmartCarIMU_pitch',
        YAW: 'SmartCarIMU_yaw'
    };

    return [codeMap[value] || 'SmartCarIMU_roll', generator.ORDER_ATOMIC];
};
