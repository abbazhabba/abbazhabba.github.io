import { Moped } from "./Moped/Moped";
import { World } from "./World/World";
import { Aim } from "./Aim/Aim";
export declare class Game {
    private level;
    moped: Moped;
    world: World;
    aim: Aim;
    constructor(level?: number);
    subscribeToMouseEvents(): void;
    startGame(): void;
}
