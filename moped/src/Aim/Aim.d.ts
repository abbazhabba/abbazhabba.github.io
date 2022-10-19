import { AimView } from "./AimView";
export declare class Aim {
    x: number;
    y: number;
    view: AimView;
    constructor(x: number, y: number);
    moveTo(x: number, y: number): void;
    shoot(): void;
}
