import type { Request, Response } from "express";
import { FootballService } from "../services/football.service.js";
import { AppError } from "../utils/appError.js";

export class FootballController {
  private static handleError(error: unknown, res: Response) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({
        success: false,
        message: error.message,
      });
    }

    return res.status(500).json({
      success: false,
      message: "Erro interno do servidor",
    });
  }

  static async live(req: Request, res: Response) {
    try {
      const data = await FootballService.getLiveMatches();
      return res.json(data);
    } catch (error) {
      return this.handleError(error, res);
    }
  }

  static async byDate(req: Request, res: Response) {
    try {
      const date = req.query.date;

      if (!date || typeof date !== "string") {
        throw new AppError("date é obrigatório", 400);
      }

      const data = await FootballService.getMatchesByDate(date);
      return res.json(data);
    } catch (error) {
      return this.handleError(error, res);
    }
  }
  static async matchDetail(req: Request, res: Response) {
    try {
      const id = req.params.id;

      if (!id || typeof id !== "string") {
        throw new AppError("id é obrigatório", 400);
      }

      const data = await FootballService.getMatchDetail(id);
      return res.json(data);
    } catch (error) {
      return this.handleError(error, res);
    }
  }

  static async stats(req: Request, res: Response) {
    try {
      const id = req.params.id;

      if (!id || typeof id !== "string") {
        throw new AppError("id é obrigatório", 400);
      }

      const data = await FootballService.getMatchStats(id);
      return res.json(data);
    } catch (error) {
      return this.handleError(error, res);
    }
  }

  static async leagues(req: Request, res: Response) {
    try {
      const data = await FootballService.getLeagues();
      return res.json(data);
    } catch (error) {
      return this.handleError(error, res);
    }
  }

  static async news(req: Request, res: Response) {
    try {
      const data = await FootballService.getNews();
      return res.json(data);
    } catch (error) {
      return this.handleError(error, res);
    }
  }

  static async transfers(req: Request, res: Response) {
    try {
      const page = Number(req.query.page) || 1;

      const data = await FootballService.getTransfers(page);
      return res.json(data);
    } catch (error) {
      return this.handleError(error, res);
    }
  }

  static async getLogo(req: Request, res: Response) {
    try {
      const teamId = req.query.teamId;

      if (!teamId || typeof teamId !== "string") {
        throw new AppError("teamId é obrigatório", 400);
      }

      const data = await FootballService.getLogoTeam(teamId);
      return res.json(data);
    } catch (error) {
      return this.handleError(error, res);
    }
  }
}
