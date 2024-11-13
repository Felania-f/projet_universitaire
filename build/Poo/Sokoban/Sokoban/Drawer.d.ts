export default class Drawer {
    private ctx;
    private scale;
    constructor(width: number, height: number, scale?: number);
    clear(): void;
    drawRectangle(x: number, y: number, color: string): void;
}
