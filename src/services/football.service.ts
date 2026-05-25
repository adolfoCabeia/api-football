import axios from "axios";
import { api } from "../config/rapidApi.js";
import { AppError } from "../utils/appError.js";

export class FootballService {
  private static async handleRequest(endpoint: string) {
    try {
      const response = await api.get(endpoint);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const status = error.response?.status || 500;
        const message =
          error.response?.data?.message ||
          error.message ||
          "Erro na API externa";

        throw new AppError(message, status);
      }

      throw new AppError("Erro interno inesperado", 500);
    }
  }

  static getLiveMatches() {
    return this.handleRequest("/football-current-live");
  }

  static getMatchesByDate(date: string) {
    if (!date) {
      throw new AppError("date é obrigatório", 400);
    }

    return this.handleRequest(
      `/football-get-matches-by-date?date=${date}`
    );
  }

  static getMatchDetail(id: string) {
    if (!id) {
      throw new AppError("id é obrigatório", 400);
    }

    return this.handleRequest(
      `/football-get-match-detail?eventid=${id}`
    );
  }

  static getMatchStats(id: string) {
    if (!id) {
      throw new AppError("id é obrigatório", 400);
    }

    return this.handleRequest(
      `/football-get-match-all-stats?eventid=${id}`
    );
  }

  static getLeagues() {
    return this.handleRequest("/football-get-all-leagues");
  }

  static getNews() {
    return this.handleRequest("/football-get-trendingnews");
  }

  static getTransfers(page = 1) {
    return this.handleRequest(
      `/football-get-all-transfers?page=${page}`
    );
  }
  static getLogoTeam(teamId: string){
    return this.handleRequest(
        `/football-team-logo?teamid=${teamId}`
    )
  }
}