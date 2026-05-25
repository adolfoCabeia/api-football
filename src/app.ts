import express from "express";
import cors from "cors";
import footballRoutes from "./routes/football.route.js";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";

const app = express();

app.use(cors());
app.use(express.json());

const swaggerDoc = YAML.load("./src/config/swagger.yaml");

app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use("/api/football", footballRoutes);

export default app;