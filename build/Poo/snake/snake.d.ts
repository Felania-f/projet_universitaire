export declare class Snake {
    private body;
    private direction;
    private grow;
    constructor();
    move(width: number, height: number): void;
    changeDirection(newDirection: {
        x: number;
        y: number;
    }): void;
    checkSelfCollision(): boolean;
    eat(): void;
    getBody(): {
        x: number;
        y: number;
    }[];
}
