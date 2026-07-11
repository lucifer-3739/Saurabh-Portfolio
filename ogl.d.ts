declare module 'ogl' {
  export class Renderer {
    constructor(options?: any);
    gl: WebGLRenderingContext & { canvas: HTMLCanvasElement };
    dpr: number;
    setSize(width: number, height: number): void;
    render(options: { scene: any }): void;
  }
  export class Program {
    constructor(gl: WebGLRenderingContext, options: any);
  }
  export class Triangle {
    constructor(gl: WebGLRenderingContext);
  }
  export class Mesh {
    constructor(gl: WebGLRenderingContext, options: any);
  }
}
