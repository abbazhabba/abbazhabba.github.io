import { I_position_moving } from "../@types/types";
export declare class MopedHelper {
    static calculateNextPosition(position: I_position_moving, time: number): I_position_moving;
    static getNewPosition(): I_position_moving;
    static kmhToMs(kmh: number): number;
}
