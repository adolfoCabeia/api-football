import dotenv from "dotenv";
dotenv.config();
import axios from "axios";
import { AppError } from "../utils/appError.js";

export class FootballService {
  static async handleRequest(endpoint: string, options?: any) {
    try {
      const baseURL = process.env.RAPIDAPI_BASE_URL;

      if (!baseURL) {
        throw new AppError("RAPIDAPI_BASE_URL não definida", 500);
      }

      const response = await axios.get(endpoint, {
        baseURL,
        headers: {
          "X-RapidAPI-Key": process.env.RAPID_API_KEY,
          "X-RapidAPI-Host": process.env.RAPIDAPI_HOST,
        },
        ...options,
      });

      return response.data;
    } catch (error: any) {
      console.error("RapidAPI Error:", error?.response?.data || error.message);

      throw new AppError(
        error?.response?.data?.message || "Request Failed Please try Again",
        error?.response?.status || 500,
      );
    }
  }
  static getLiveMatches() {
    return this.handleRequest("/football-current-live");
  }
  static getMatchesByDate(date: string) {
    if (!date) {
      throw new AppError("date é obrigatório", 400);
    }

    return this.handleRequest("/football-get-matches-by-date", {
      params: { date },
    });
  }
  static getMatchDetail(id: string) {
    if (!id) {
      throw new AppError("id é obrigatório", 400);
    }

    console.log("EVENT ID:", id);

    return this.handleRequest("/football-get-match-detail", {
      params: {
        eventid: id,
      },
    });
  }
  static getMatchStats(id: string) {
    if (!id) {
      throw new AppError("id é obrigatório", 400);
    }

    console.log("EVENT ID:", id);

    return this.handleRequest("/football-get-match-all-stats", {
      params: { eventid: id },
    });
  }
  static getLeagues() {
    return this.handleRequest("/football-get-all-leagues");
  }
  static getNews() {
    return this.handleRequest("/football-get-trendingnews");
  }
  static getTransfers(page = 1) {
    return this.handleRequest("/football-get-all-transfers", {
      params: { page },
    });
  }

  static getLogoTeam(teamId: string) {
    return this.handleRequest(`/football-team-logo?teamid=${teamId}`);
  }
}
