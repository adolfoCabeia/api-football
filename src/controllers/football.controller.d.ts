import type { Request, Response } from "express";
export declare class FootballController {
    private static handleError;
    static live(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    static byDate(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    static matchDetail(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    static stats(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    static leagues(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    static news(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    static transfers(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    static getLogo(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
//# sourceMappingURL=football.controller.d.ts.map