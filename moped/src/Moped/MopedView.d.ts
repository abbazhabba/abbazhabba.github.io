import { I_position_moving } from "../@types/types";
export declare class MopedView {
    rendered: boolean;
    render(position: I_position_moving): void;
    move(position: I_position_moving): void;
    destroy(explosion?: boolean): void;
}
