export default class Drawer {
    constructor(width: any, height: any, scale?: number);
    scale: number;
    ctx: CanvasRenderingContext2D | null;
    clear(): void;
    drawRectangle(x: any, y: any, color: any): void;
}
