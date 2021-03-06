import { inOutFactory, conversionFactory } from './functions.factory';
import { TIoBrokerInOutFunction_State, TIoBrokerInOutFunction_StateDeferred, TIoBrokerInOutFunction_State_OnlyACK } from "./iofunc.state";
import { TIoBrokerInOutFunction_Const } from './iofunc.const';
import { TIoBrokerInOutFunction_HomematicWindowCovering_TargetPosition } from './iofunc.homematic.covering';
import { TIoBrokerConversion_Passthrough } from './conversion.passthrough';
import { TIoBrokerConversion_HomematicControlMode_To_CoolingState, TIoBrokerConversion_HomematicDirection_To_PositionState } from './conversion.homekit.homematic';
import { TIoBrokerConversion_Scale } from './conversion.scale';
import { TIoBrokerConversion_Inverse } from './conversion.inverse';
import { TIoBrokerConversion_Script } from './conversion.script';
import { TIoBrokerInOutFunction_MultiState } from './iofunc.multi-state';
import { TIoBrokerConversion_Map } from './conversion.map';

inOutFactory["ioBroker.State"] = TIoBrokerInOutFunction_State.create;
inOutFactory["ioBroker.MultiState"] = TIoBrokerInOutFunction_MultiState.create;
inOutFactory["ioBroker.State.Defered"] = TIoBrokerInOutFunction_StateDeferred.create;
inOutFactory["ioBroker.State.OnlyACK"] = TIoBrokerInOutFunction_State_OnlyACK.create;
inOutFactory["const"] = TIoBrokerInOutFunction_Const.create;
inOutFactory["ioBroker.homematic.WindowCovering.TargetPosition"] = TIoBrokerInOutFunction_HomematicWindowCovering_TargetPosition.create;

conversionFactory["passthrough"] = (adapter, param) => new TIoBrokerConversion_Passthrough(adapter);
conversionFactory["HomematicDirectionToHomekitPositionState"] = (adapter, param) => new TIoBrokerConversion_HomematicDirection_To_PositionState(adapter);
conversionFactory["HomematicControlModeToHomekitHeathingCoolingState"] = (adapter, param) => new TIoBrokerConversion_HomematicControlMode_To_CoolingState(adapter);
conversionFactory["level255"] = (adapter, param) => new TIoBrokerConversion_Scale(adapter, {
    "homekit.min": 0,
    "homekit.max": 100,
    "iobroker.min": 0,
    "iobroker.max": 255
});
conversionFactory["scaleInt"] = TIoBrokerConversion_Scale.create;
conversionFactory["scaleFloat"] = TIoBrokerConversion_Scale.create;
conversionFactory["hue"] = (adapter, param) => new TIoBrokerConversion_Scale(adapter, {
    "homekit.min": 0,
    "homekit.max": 360,
    "iobroker.min": 0,
    "iobroker.max": 65535
});
conversionFactory["inverse"] = TIoBrokerConversion_Inverse.create;
conversionFactory["script"] = (adapter, param) => new TIoBrokerConversion_Script(adapter, param);
// 255 -> 65535.0
// 100 - 360

conversionFactory["map"] = TIoBrokerConversion_Map.create;
