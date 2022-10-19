export interface I_MopedConstructorParams {
    position: I_position_moving;
}
declare type T_Direction = number;
declare type T_Speed = number;
export declare type I_Time = number;
export interface I_position_moving {
    x: number;
    y: number;
    z: number;
    direction: T_Direction;
    speed: T_Speed;
}
export {};
