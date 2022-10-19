import { I_MopedConstructorParams, I_position_moving, I_Time } from "../@types/types";
import { MopedView } from "./MopedView";
export declare class Moped {
    position: I_position_moving;
    view: MopedView;
    constructor(params?: I_MopedConstructorParams);
    private startFlying;
    flyNextStep(time: I_Time): void;
    stopFlying(explosion: boolean): void;
}
