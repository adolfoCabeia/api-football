import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
export const api = axios.create({
    baseURL: "https://free-api-live-football-data.p.rapidapi.com",
    headers: {
        "X-RapidAPI-Key": process.env.RAPID_API_KEY,
        "X-RapidAPI-Host": process.env.RAPIDAPI_HOST,
    },
});
//# sourceMappingURL=rapidApi.js.map